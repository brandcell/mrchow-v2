let container = document.querySelector('#cb-spb');
let cart_items = document.querySelector('.cb-cart-items');
let progress = document.querySelector('.cb-sbp-progress');
let cart_total = parseInt(progress.dataset.cartTotal) / 100;
let thresholds = document.querySelectorAll('.cb-sbp-threshold');
let max_threshold_val = 0;

cart_items.parentNode.insertBefore(container, cart_items);

for (let i = 0; i < thresholds.length; i++) {
  let threshold = thresholds[i];

  if (max_threshold_val < parseInt(threshold.dataset.value)) {
    max_threshold_val = parseInt(threshold.dataset.value);
  }
}

let progress_percent = cart_total * 100 / max_threshold_val;
if (progress_percent > 100 ) {
  progress_percent = 100;
}

// progress.style.width = progress_percent + "%";