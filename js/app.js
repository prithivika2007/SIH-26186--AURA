window.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

const PERSONNEL_RECORDS = [
    { id: "P-10482", unit: "Alpha Battalion - CRPF", risk: "Elevated", trajectory: "↑ Deteriorating", primaryIndicator: "Consecutive duty burden", score: 84 },
    { id: "P-10491", unit: "Bravo Company", risk: "Moderate", trajectory: "→ Stable", primaryIndicator: "Night-duty frequency", score: 62 },
    { id: "P-10503", unit: "Charlie Group", risk: "Watch", trajectory: "↓ Improving", primaryIndicator: "Standard operational baseline", score: 28 },
    { id: "P-10519", unit: "Delta Battalion", risk: "Elevated", trajectory: "↑ Deteriorating", primaryIndicator: "Recovery window deficit", score: 79 },
    { id: "P-10602", unit: "Echo Unit", risk: "Moderate", trajectory: "→ Stable", primaryIndicator: "Workload distribution", score: 55 },
];

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

function handleCheckin() {
    alert("Voluntary check-in logged successfully. Total confidentiality maintained.");
}