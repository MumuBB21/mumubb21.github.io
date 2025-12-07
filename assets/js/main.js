// 多语言切换
document.getElementById('langToggle')?.addEventListener('click', function() {
  const isZh = this.textContent === '中文';
  this.textContent = isZh ? 'EN' : '中文';
  document.body.classList.toggle('en', !isZh);

  // 更新所有双语文本
  document.querySelectorAll('[data-zh][data-en]').forEach(el => {
    el.textContent = isZh ? el.dataset.en : el.dataset.zh;
  });

  localStorage.setItem('lang', isZh ? 'en' : 'zh');
});

// 恢复上次语言
window.addEventListener('load', () => {
  const saved = localStorage.getItem('lang');
  if (saved === 'en') {
    document.getElementById('langToggle')?.click();
  }
});

// 幕后信息展开
document.querySelector('.production-trigger')?.addEventListener('click', function() {
  const content = document.querySelector('.production-content');
  content.classList.toggle('active');
});