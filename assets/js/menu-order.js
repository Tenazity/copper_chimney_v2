'use strict';

/**
 * MENU ORDER SYSTEM
 * Handles dish selection, cart management, and order placement.
 */

(function () {

    /* =====================
       STATE
       ===================== */
    let cart = {};

    // Load cart from localStorage
    try {
        const saved = localStorage.getItem('cc_cart');
        if (saved) cart = JSON.parse(saved);
    } catch (e) { /* ignore */ }

    function saveCart() {
        try { localStorage.setItem('cc_cart', JSON.stringify(cart)); } catch (e) { /* ignore */ }
    }

    /* =====================
       HELPERS
       ===================== */
    function getItemCount() {
        return Object.values(cart).reduce((sum, item) => sum + item.qty, 0);
    }

    function getTotal() {
        return Object.values(cart).reduce((sum, item) => sum + item.price * item.qty, 0);
    }

    function formatPrice(n) {
        return '$' + n.toFixed(2);
    }

    /* =====================
       CART BAR
       ===================== */
    function updateCartBar() {
        const bar = document.getElementById('cart-bar');
        const countEl = document.getElementById('cart-count');
        const totalEl = document.getElementById('cart-total');
        const count = getItemCount();

        if (count > 0) {
            bar.classList.add('visible');
            countEl.textContent = count + (count === 1 ? ' item' : ' items');
            totalEl.textContent = formatPrice(getTotal());
        } else {
            bar.classList.remove('visible');
        }
    }

    /* =====================
       MENU CARD BUTTONS
       ===================== */
    function updateCardUI(id) {
        const card = document.querySelector(`[data-item-id="${id}"]`);
        if (!card) return;
        const addBtn = card.querySelector('.add-to-order-btn');
        const qtyCtrl = card.querySelector('.qty-controls');
        const qtyNum = card.querySelector('.qty-number');
        const item = cart[id];

        if (item && item.qty > 0) {
            addBtn.style.display = 'none';
            qtyCtrl.style.display = 'flex';
            qtyNum.textContent = item.qty;
        } else {
            addBtn.style.display = 'inline-flex';
            qtyCtrl.style.display = 'none';
        }
    }

    function addItem(id, name, price) {
        if (!cart[id]) {
            cart[id] = { id, name, price: parseFloat(price), qty: 0 };
        }
        cart[id].qty++;
        saveCart();
        updateCardUI(id);
        updateCartBar();
    }

    function decrementItem(id) {
        if (!cart[id]) return;
        cart[id].qty--;
        if (cart[id].qty <= 0) delete cart[id];
        saveCart();
        updateCardUI(id);
        updateCartBar();
    }

    function incrementItem(id) {
        if (!cart[id]) return;
        cart[id].qty++;
        saveCart();
        updateCardUI(id);
        updateCartBar();
    }

    /* =====================
       ORDER MODAL
       ===================== */
    function renderOrderModal() {
        const list = document.getElementById('order-items-list');
        const totalEl = document.getElementById('order-total');
        const emptyMsg = document.getElementById('order-empty');
        const orderBody = document.getElementById('order-body');

        list.innerHTML = '';
        const items = Object.values(cart);

        if (items.length === 0) {
            emptyMsg.style.display = 'block';
            orderBody.style.display = 'none';
            return;
        }

        emptyMsg.style.display = 'none';
        orderBody.style.display = 'block';

        items.forEach(item => {
            const row = document.createElement('div');
            row.className = 'order-item';
            row.innerHTML = `
        <div class="order-item-info">
          <span class="order-item-name">${item.name}</span>
          <span class="order-item-price">${formatPrice(item.price)}</span>
        </div>
        <div class="order-item-actions">
          <button class="order-qty-btn" data-action="dec" data-id="${item.id}" aria-label="decrease">−</button>
          <span class="order-qty-num">${item.qty}</span>
          <button class="order-qty-btn" data-action="inc" data-id="${item.id}" aria-label="increase">+</button>
          <button class="order-remove-btn" data-id="${item.id}" aria-label="remove">
            <ion-icon name="trash-outline"></ion-icon>
          </button>
        </div>
        <div class="order-item-subtotal">${formatPrice(item.price * item.qty)}</div>
      `;
            list.appendChild(row);
        });

        totalEl.textContent = formatPrice(getTotal());

        // Bind modal item buttons
        list.querySelectorAll('.order-qty-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                if (this.dataset.action === 'dec') decrementItem(id);
                else incrementItem(id);
                renderOrderModal();
            });
        });

        list.querySelectorAll('.order-remove-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const id = this.dataset.id;
                delete cart[id];
                saveCart();
                updateCardUI(id);
                updateCartBar();
                renderOrderModal();
            });
        });
    }

    function openOrderModal() {
        const modal = document.getElementById('order-modal');
        modal.classList.add('active');
        document.body.classList.add('modal-active');
        // Reset to order view (not confirmation)
        document.getElementById('order-view').style.display = 'block';
        document.getElementById('order-confirm-view').style.display = 'none';
        renderOrderModal();
    }

    function closeOrderModal() {
        const modal = document.getElementById('order-modal');
        modal.classList.remove('active');
        document.body.classList.remove('modal-active');
    }

    /* =====================
       DELIVERY / PICKUP TOGGLE
       ===================== */
    function toggleDeliveryField() {
        const type = document.querySelector('input[name="order-type"]:checked');
        const addressField = document.getElementById('delivery-address-field');
        if (type && type.value === 'delivery') {
            addressField.style.display = 'block';
        } else {
            addressField.style.display = 'none';
        }
    }

    /* =====================
       PLACE ORDER
       ===================== */
    function placeOrder(e) {
        e.preventDefault();
        const name = document.getElementById('order-name').value.trim();
        const phone = document.getElementById('order-phone').value.trim();
        if (!name || !phone) return;

        // Show confirmation
        document.getElementById('order-view').style.display = 'none';
        const confirmView = document.getElementById('order-confirm-view');
        confirmView.style.display = 'flex';
        document.getElementById('confirm-name').textContent = name;
        document.getElementById('confirm-total').textContent = formatPrice(getTotal());
        document.getElementById('confirm-count').textContent = getItemCount();

        // Clear cart
        cart = {};
        saveCart();
        updateCartBar();
        document.querySelectorAll('[data-item-id]').forEach(card => {
            const id = card.dataset.itemId;
            updateCardUI(id);
        });
    }

    /* =====================
       INIT
       ===================== */
    function init() {
        // Initialize existing card UIs from saved cart
        document.querySelectorAll('[data-item-id]').forEach(card => {
            const id = card.dataset.itemId;
            updateCardUI(id);
        });
        updateCartBar();

        // Bind "Add to Order" buttons
        document.querySelectorAll('.add-to-order-btn').forEach(btn => {
            btn.addEventListener('click', function () {
                const card = this.closest('[data-item-id]');
                addItem(card.dataset.itemId, card.dataset.itemName, card.dataset.itemPrice);
            });
        });

        // Bind quantity controls on cards
        document.querySelectorAll('.qty-dec').forEach(btn => {
            btn.addEventListener('click', function () {
                const card = this.closest('[data-item-id]');
                decrementItem(card.dataset.itemId);
            });
        });

        document.querySelectorAll('.qty-inc').forEach(btn => {
            btn.addEventListener('click', function () {
                const card = this.closest('[data-item-id]');
                incrementItem(card.dataset.itemId);
            });
        });

        // Cart bar → open modal
        document.getElementById('cart-bar-btn').addEventListener('click', openOrderModal);

        // Modal close
        document.getElementById('order-modal-close').addEventListener('click', closeOrderModal);
        document.getElementById('order-modal-overlay').addEventListener('click', closeOrderModal);

        // Delivery / Pickup toggle
        document.querySelectorAll('input[name="order-type"]').forEach(radio => {
            radio.addEventListener('change', toggleDeliveryField);
        });
        toggleDeliveryField();

        // Place order form
        document.getElementById('order-form').addEventListener('submit', placeOrder);

        // Confirmation close
        document.getElementById('confirm-close-btn').addEventListener('click', closeOrderModal);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
