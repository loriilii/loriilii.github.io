function toggleLanguage() {
    const zhElements = document.querySelectorAll('.lang-zh');
    const enElements = document.querySelectorAll('.lang-en');
    const btn = document.getElementById('lang-switch-btn');

    // 檢查目前是否為中文模式（如果第一個中文元素沒有 hidden class）
    const isZh = !zhElements[0].classList.contains('hidden');

    if (isZh) {
        // 切換到英文
        zhElements.forEach(el => el.classList.add('hidden'));
        enElements.forEach(el => el.classList.remove('hidden'));
        btn.innerText = "切換為中文";
    } else {
        // 切換到中文
        zhElements.forEach(el => el.classList.remove('hidden'));
        enElements.forEach(el => el.classList.add('hidden'));
        btn.innerText = "Switch to English";
    }
}