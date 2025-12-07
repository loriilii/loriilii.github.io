// 語言切換功能
function toggleLanguage() {
    const zhElements = document.querySelectorAll('.lang-zh');
    const enElements = document.querySelectorAll('.lang-en');
    const btn = document.getElementById('lang-switch-btn');

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

// Modal 開關功能
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
    // 禁止背景滾動
    document.body.style.overflow = "hidden";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
    // 恢復背景滾動
    document.body.style.overflow = "auto";
}

// 點擊 Modal 外部區域也可關閉
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
        document.body.style.overflow = "auto";
    }
}
