:root {
  font-family: Inter, 'Segoe UI', sans-serif;
  color: #1c2c24;
  background: #f7faf7;
  line-height: 1.5;
  font-weight: 400;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #f7faf7;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

img {
  max-width: 100%;
}

.announcement {
  background: #183f2c;
  color: #dfeee5;
  text-align: center;
  padding: 9px 18px;
  font-size: 12px;
  letter-spacing: 0.04em;
}

.header {
  max-width: 1180px;
  margin: 0 auto;
  min-height: 74px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: -0.06em;
  color: #183629;
  font-size: 22px;
}

.logo.light {
  color: #fff;
}

.logo-mark {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: #236640;
  color: #fff;
  display: grid;
  place-items: center;
  font-size: 17px;
  transform: rotate(-8deg);
}

.logo > span:last-child span {
  color: #4a9468;
}

.nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: #586b63;
  font-size: 13px;
}

.nav a:hover {
  color: #246a41;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-button,
.mobile-menu {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: transparent;
  color: #2a493d;
  display: grid;
  place-items: center;
}

.cart-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #ebf5ee;
  color: #1b5739;
  border-radius: 9px;
  padding: 9px 14px;
  font-weight: 700;
  font-size: 13px;
}

.cart-button span {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #1d5d3b;
  color: #fff;
  font-size: 10px;
}

.mobile-menu {
  display: none;
}

main {
  overflow: hidden;
}

.hero {
  max-width: 1180px;
  margin: 0 auto;
  padding: 68px 24px 52px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 36px;
  background: #eef7ef;
}

.hero-copy {
  flex: 1;
  max-width: 530px;
}

.eyebrow {
  margin: 0 0 14px;
  color: #4d8a61;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  line-height: 0.96;
  letter-spacing: -0.07em;
  font-size: clamp(46px, 5vw, 72px);
  color: #163328;
}

h1 em {
  color: #4b9567;
  font-style: normal;
}

.hero-text {
  margin: 22px 0 0;
  max-width: 430px;
  color: #617269;
  font-size: 15px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 28px;
}

.primary-button,
.ghost-button,
.add-button {
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.2s ease;
}

.primary-button {
  background: #23603d;
  color: #fff;
  padding: 12px 18px;
  font-weight: 700;
  border: none;
}

.primary-button:hover,
.ghost-button:hover,
.add-button:hover {
  transform: translateY(-1px);
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  color: #3a7f57;
}

.trust-row {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 32px;
  color: #65776f;
  font-size: 12px;
}

.trust-row span {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.trust-row svg {
  color: #4d8e61;
}

.hero-art {
  position: relative;
  width: min(500px, 45vw);
  height: 360px;
  min-width: 300px;
}

.sun {
  position: absolute;
  width: 290px;
  height: 290px;
  border-radius: 50%;
  background: #d8ebd9;
  right: 55px;
  top: 20px;
}

.hero-card {
  position: absolute;
  z-index: 2;
  width: 130px;
  height: 110px;
  border-radius: 15px;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 16px 36px rgba(33, 62, 50, 0.12);
  font-weight: 800;
}

.card-one {
  left: 30px;
  top: 55px;
  background: #fff;
  color: #4b9567;
}

.card-one span {
  margin-top: 8px;
  font-size: 11px;
  color: #5f7467;
}

.card-two {
  right: 10px;
  bottom: 30px;
  background: #f0d77a;
  color: #fff;
  font-size: 22px;
}

.card-two span {
  margin-top: 8px;
  font-size: 10px;
  opacity: 0.9;
}

.wire {
  position: absolute;
  width: 330px;
  height: 100px;
  border-bottom: 5px solid #316d47;
  border-radius: 50%;
  right: 60px;
  bottom: 18px;
  transform: rotate(-8deg);
}

.hero-plug {
  position: absolute;
  right: 95px;
  top: 78px;
  font-size: 150px;
  transform: rotate(14deg);
  filter: drop-shadow(12px 18px 12px rgba(100, 121, 108, 0.18));
}

.benefits,
.categories-section,
.products-section,
.about-section,
.contact-section,
.admin-section,
.footer-main,
.footer-bottom {
  max-width: 1180px;
  margin: 0 auto;
}

.benefits {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
  padding: 0 24px 28px;
  border-bottom: 1px solid #e2e9e2;
}

.benefits > div {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #f9fdf9;
  border: 1px solid #e9efe9;
  border-radius: 14px;
  padding: 18px 16px;
}

.benefits svg {
  color: #4d8a61;
}

.benefits span {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.benefits strong {
  font-size: 13px;
}

.benefits small {
  color: #72857a;
  font-size: 11px;
}

.categories-section,
.products-section,
.about-section,
.admin-section {
  padding: 78px 24px 0;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 16px;
  margin-bottom: 24px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(28px, 2.5vw, 42px);
  letter-spacing: -0.06em;
  color: #1e352e;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.category-card {
  background: #f2f5f2;
  border: 1px solid #edf1ee;
  border-radius: 12px;
  padding: 18px 15px;
  display: flex;
  align-items: center;
  gap: 12px;
  text-align: left;
  transition: transform 0.2s ease;
}

.category-card:hover {
  transform: translateY(-3px);
}

.category-card > svg {
  margin-left: auto;
  color: #517d63;
}

.category-card span:nth-child(2) {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.category-card strong {
  font-size: 13px;
  color: #1d332d;
}

.category-card small {
  color: #7a877f;
  font-size: 10px;
}

.category-icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: rgba(255, 255, 255, 0.7);
  font-size: 22px;
}

.lighting {
  background: #fff5dc;
}

.cables {
  background: #ebf2ff;
}

.switchgear {
  background: #edf9ef;
}

.tools {
  background: #f7eef9;
}

.product-tools {
  display: flex;
  align-items: center;
  gap: 12px;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 10px;
  background: #fff;
  border: 1px solid #e1e7e1;
  border-radius: 8px;
  color: #7e8d86;
}

.search-box input {
  width: 170px;
  border: none;
  outline: none;
  background: transparent;
  padding: 10px 0;
  font-size: 12px;
}

.product-tools select {
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e1e7e1;
  background: #fff;
  color: #52625b;
  font-size: 12px;
}

.filter-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 22px;
}

.filter-row button {
  padding: 9px 12px;
  border-radius: 7px;
  font-size: 11px;
  background: #f0f4f1;
  color: #63756d;
}

.filter-row button.active {
  background: #23603d;
  color: #fff;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.product-card {
  background: #fff;
  border: 1px solid #edf2ee;
  border-radius: 12px;
  overflow: hidden;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(19, 44, 35, 0.07);
}

.product-image {
  position: relative;
  height: 190px;
  display: grid;
  place-items: center;
}

.product-emoji {
  font-size: 72px;
  filter: drop-shadow(0 8px 14px rgba(0, 0, 0, 0.08));
}

.badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #1d5c3c;
  color: #fff;
  border-radius: 7px;
  padding: 5px 7px;
  font-size: 9px;
  font-weight: 700;
}

.product-info {
  padding: 16px 16px 17px;
}

.product-category {
  margin: 0 0 7px;
  color: #7a8d84;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.product-info h3 {
  margin: 0 0 10px;
  line-height: 1.3;
  font-size: 15px;
  color: #1d2f2a;
}

.rating-row {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #edb347;
  font-size: 11px;
  font-weight: 700;
}

.rating-row small {
  color: #809088;
  font-weight: 600;
}

.product-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 18px;
}

.product-bottom strong {
  font-size: 19px;
  letter-spacing: -0.04em;
}

.product-actions {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.ghost-button,
.add-button {
  padding: 8px 10px;
  font-size: 11px;
  font-weight: 700;
}

.ghost-button {
  background: #edf5ef;
  color: #1d5d3b;
}

.add-button {
  background: #1d5d3b;
  color: #fff;
}

.empty-state {
  text-align: center;
  color: #79877f;
  padding: 28px 0 0;
}

.features {
  max-width: 1180px;
  margin: 0 auto;
  padding: 70px 24px 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.feature-box {
  background: #fff;
  border: 1px solid #edf2ee;
  border-radius: 14px;
  padding: 28px 22px;
}

.feature-box svg {
  color: #488963;
}

.feature-box h3 {
  margin: 16px 0 10px;
  font-size: 18px;
  color: #183328;
}

.feature-box p {
  margin: 0;
  color: #62736a;
  font-size: 13px;
  line-height: 1.7;
}

.about-section {
  padding-top: 80px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 18px;
}

.about-card {
  background: #fff;
  border: 1px solid #edf2ee;
  border-radius: 16px;
  padding: 26px 22px;
}

.about-card.glass {
  background: linear-gradient(135deg, #dfeee2 0%, #f7faf7 100%);
}

.big-number {
  margin: 0 0 10px;
  font-size: clamp(28px, 3vw, 42px);
  color: #1e5f3d;
  letter-spacing: -0.06em;
  font-weight: 900;
}

.about-card h3 {
  margin: 0 0 10px;
  color: #183328;
  font-size: 19px;
}

.about-card p,
.about-card li {
  margin: 0;
  color: #5b6f66;
  font-size: 13px;
  line-height: 1.7;
}

.about-card ul {
  margin: 0;
  padding-left: 18px;
}

.contact-section {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 28px;
  padding: 85px 24px 0;
}

.contact-copy h2 {
  margin: 0 0 12px;
  font-size: clamp(28px, 3vw, 44px);
  letter-spacing: -0.06em;
  color: #1b332c;
}

.contact-copy p {
  margin: 0;
  color: #62736a;
  font-size: 14px;
  line-height: 1.8;
}

.contact-list {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: #1a3d2d;
  font-size: 13px;
}

.contact-list span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.contact-form {
  background: #fff;
  border: 1px solid #edf2ee;
  border-radius: 16px;
  padding: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.contact-form input,
.contact-form textarea,
.checkout-form input,
.account-form input {
  width: 100%;
  border: 1px solid #e6ece7;
  border-radius: 9px;
  background: #fafcfb;
  padding: 12px 13px;
  font-size: 13px;
  color: #243c34;
  outline: none;
}

.contact-form textarea {
  resize: vertical;
}

.admin-section {
  padding-top: 78px;
}

.status-badge {
  background: #edf6ef;
  color: #2d6e48;
  border-radius: 999px;
  padding: 8px 12px;
  font-size: 11px;
  font-weight: 700;
}

.admin-grid {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 18px;
}

.admin-dash {
  background: #fff;
  border: 1px solid #edf2ee;
  border-radius: 14px;
  padding: 18px;
  display: grid;
  gap: 16px;
}

.metric {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #f7faf7;
  border-radius: 12px;
  padding: 16px;
}

.metric svg {
  color: #49775d;
}

.metric span {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.metric strong {
  font-size: 28px;
  letter-spacing: -0.06em;
}

.metric small {
  color: #729083;
  font-size: 11px;
}

.inventory-list {
  background: #fff;
  border: 1px solid #edf2ee;
  border-radius: 14px;
  padding: 16px;
  display: grid;
  gap: 10px;
}

.inventory-row {
  display: grid;
  grid-template-columns: 1.3fr 0.8fr 0.7fr 0.9fr;
  align-items: center;
  gap: 10px;
  padding: 12px 12px;
  background: #f9fbf9;
  border-radius: 10px;
}

.inventory-row strong {
  display: block;
  font-size: 13px;
  margin-bottom: 2px;
}

.inventory-row small {
  color: #73857b;
  font-size: 10px;
}

.tag,
.status {
  display: inline-flex;
  justify-content: center;
  padding: 6px 8px;
  border-radius: 999px;
  font-size: 10px;
  font-weight: 700;
}

.tag {
  background: #eaf7ee;
  color: #2d6e48;
}

.tag.warning {
  background: #fff2d8;
  color: #9a6e16;
}

.status {
  background: #edf5ef;
  color: #2d6e48;
}

.status.low {
  background: #fff2d8;
  color: #9a6e16;
}

.price {
  font-size: 12px;
  font-weight: 700;
  color: #1d332d;
}

.footer-main {
  margin-top: 88px;
  padding: 30px 24px 0;
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr;
  gap: 24px;
}

footer {
  background: #17372b;
  padding-bottom: 22px;
  margin-top: 72px;
}

.footer-main p {
  color: #a6b9ad;
  font-size: 12px;
  line-height: 1.8;
  max-width: 300px;
  margin-top: 18px;
}

.footer-main h4 {
  margin: 0 0 12px;
  font-size: 12px;
  color: #fff;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.footer-main a {
  display: block;
  color: #afc3b6;
  font-size: 12px;
  margin: 8px 0;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 24px 0;
  margin-top: 26px;
  color: #a9bfb3;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  font-size: 11px;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(18, 36, 28, 0.38);
  display: grid;
  place-items: center;
  z-index: 30;
}

.modal-card,
.drawer-panel,
.checkout-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 30px 60px rgba(13, 25, 20, 0.18);
}

.modal-card {
  width: min(760px, calc(100vw - 24px));
  display: grid;
  grid-template-columns: minmax(220px, 1fr) minmax(260px, 1.2fr);
  overflow: hidden;
  position: relative;
}

.close-button {
  position: absolute;
  right: 16px;
  top: 16px;
  background: rgba(255, 255, 255, 0.7);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #516460;
}

.modal-visual {
  display: grid;
  place-items: center;
  min-height: 260px;
  font-size: 110px;
}

.modal-copy {
  padding: 34px 28px 28px;
}

.modal-copy h3 {
  margin: 0 0 8px;
  font-size: 28px;
  letter-spacing: -0.05em;
  color: #183328;
}

.modal-copy p {
  margin: 0;
  color: #5e7168;
  line-height: 1.75;
  font-size: 13px;
}

.modal-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin-top: 22px;
}

.modal-bottom strong {
  font-size: 28px;
  letter-spacing: -0.06em;
}

.drawer-panel {
  width: min(420px, calc(100vw - 18px));
  padding: 18px;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 0;
  display: flex;
  flex-direction: column;
}

.cart-panel {
  padding-bottom: 0;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid #e8eee9;
}

.drawer-header h3 {
  margin: 0;
  font-size: 24px;
  letter-spacing: -0.05em;
  color: #1d332d;
}

.drawer-header button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #526760;
  background: transparent;
}

.switcher {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #f1f6f2;
  border-radius: 10px;
  padding: 5px;
  margin-top: 18px;
}

.switcher button {
  background: transparent;
  border-radius: 8px;
  padding: 9px 10px;
  font-size: 12px;
  color: #516760;
}

.switcher button.active {
  background: #fff;
  box-shadow: 0 1px 4px rgba(16, 44, 35, 0.08);
  color: #1e5d3c;
}

.account-form {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.empty-cart {
  display: grid;
  place-items: center;
  text-align: center;
  margin: auto;
  color: #6b7a72;
  padding: 20px 0 50px;
}

.empty-cart h4 {
  color: #1b332c;
  margin: 15px 0 8px;
  font-size: 19px;
}

.empty-cart p {
  margin: 0 0 16px;
  font-size: 12px;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding-top: 16px;
}

.cart-item {
  display: flex;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #edf2ee;
}

.cart-thumb {
  width: 62px;
  height: 62px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-size: 28px;
}

.cart-details {
  flex: 1;
}

.cart-details h4 {
  margin: 0 0 6px;
  color: #1d2f2a;
  font-size: 13px;
  line-height: 1.4;
}

.cart-details strong {
  font-size: 13px;
  color: #244b37;
}

.quantity-box {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.quantity-box button {
  width: 24px;
  height: 24px;
  border-radius: 6px;
  display: grid;
  place-items: center;
  background: #edf5ef;
  color: #1e603d;
}

.quantity-box span {
  min-width: 18px;
  text-align: center;
  font-size: 12px;
  color: #1d352f;
  font-weight: 700;
}

.remove-button {
  margin-left: 8px;
  background: transparent !important;
  color: #9b6a6a !important;
}

.cart-summary {
  border-top: 1px solid #edf2ee;
  padding: 18px 0 20px;
}

.cart-summary > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  color: #1c342c;
}

.cart-summary small {
  display: block;
  color: #708077;
  font-size: 10px;
  margin-bottom: 16px;
}

.checkout-card {
  width: min(460px, calc(100vw - 22px));
  padding: 20px 18px 18px;
}

.checkout-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 18px;
}

.checkout-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #f5faf6;
  padding: 12px 14px;
  color: #183328;
  font-size: 13px;
}

.checkout-total strong {
  font-size: 22px;
  letter-spacing: -0.05em;
}

.toast {
  position: fixed;
  bottom: 26px;
  left: 50%;
  transform: translateX(-50%);
  background: #17372b;
  color: #fff;
  padding: 12px 18px;
  border-radius: 10px;
  font-size: 12px;
  box-shadow: 0 14px 24px rgba(9, 23, 18, 0.18);
  z-index: 40;
}

@media (max-width: 860px) {
  .hero {
    flex-direction: column;
    padding-top: 48px;
    gap: 18px;
  }

  .hero-art {
    width: min(100%, 420px);
    height: 300px;
  }

  .product-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .category-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-grid,
  .features,
  .contact-section,
  .admin-grid,
  .footer-main {
    grid-template-columns: 1fr;
  }

  .header {
    position: relative;
  }

  .nav {
    display: none;
    position: absolute;
    top: 72px;
    left: 18px;
    right: 18px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 18px 28px rgba(14, 36, 28, 0.08);
    border: 1px solid #edf2ee;
    flex-direction: column;
    padding: 12px;
    z-index: 20;
  }

  .nav.open {
    display: flex;
  }

  .mobile-menu {
    display: grid;
  }

  .icon-button {
    display: none;
  }
}

@media (max-width: 560px) {
  .announcement {
    font-size: 11px;
  }

  .header {
    padding: 0 18px;
  }

  .hero,
  .benefits,
  .categories-section,
  .products-section,
  .about-section,
  .contact-section,
  .admin-section,
  .features {
    padding-left: 18px;
    padding-right: 18px;
  }

  .section-heading {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-tools {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    width: 100%;
  }

  .search-box input {
    width: 100%;
  }

  .product-grid,
  .category-grid {
    grid-template-columns: 1fr;
  }

  .product-actions {
    gap: 6px;
  }

  .ghost-button,
  .add-button {
    padding: 7px 8px;
  }

  .hero-art {
    width: 100%;
    min-width: 0;
  }

  .hero-card {
    transform: scale(0.8);
  }

  .card-one {
    left: 8px;
  }

  .card-two {
    right: 0;
  }

  .hero-plug {
    right: 48px;
    font-size: 115px;
  }

  .inventory-row {
    grid-template-columns: 1fr 1fr;
  }

  .footer-bottom {
    flex-direction: column;
  }

  .modal-card {
    grid-template-columns: 1fr;
  }

  .modal-copy {
    padding-top: 14px;
  }
}
