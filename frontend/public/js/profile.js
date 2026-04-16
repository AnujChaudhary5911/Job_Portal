// profile.js - Profile Page Script

// ========== EDIT PERSONAL INFO ==========
const editPersonalBtn = document.getElementById('editPersonalBtn');
const closePersonalBtn = document.getElementById('closePersonalBtn');
const editPersonalModal = document.getElementById('editPersonalModal');

if (editPersonalBtn) {
    editPersonalBtn.addEventListener('click', () => {
        editPersonalModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closePersonalBtn) {
    closePersonalBtn.addEventListener('click', () => {
        editPersonalModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// ========== EDIT SKILLS ==========
const editSkillsBtn = document.getElementById('editSkillsBtn');
const closeSkillsBtn = document.getElementById('closeSkillsBtn');
const editSkillsModal = document.getElementById('editSkillsModal');

if (editSkillsBtn) {
    editSkillsBtn.addEventListener('click', () => {
        editSkillsModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeSkillsBtn) {
    closeSkillsBtn.addEventListener('click', () => {
        editSkillsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// ========== EDIT EDUCATION ==========
const editEducationBtn = document.getElementById('editEducationBtn');
const closeEducationBtn = document.getElementById('closeEducationBtn');
const editEducationModal = document.getElementById('editEducationModal');

if (editEducationBtn) {
    editEducationBtn.addEventListener('click', () => {
        editEducationModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeEducationBtn) {
    closeEducationBtn.addEventListener('click', () => {
        editEducationModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// ========== EDIT EXPERIENCE ==========
const editExperienceBtn = document.getElementById('editExperienceBtn');
const closeExperienceBtn = document.getElementById('closeExperienceBtn');
const editExperienceModal = document.getElementById('editExperienceModal');

if (editExperienceBtn) {
    editExperienceBtn.addEventListener('click', () => {
        editExperienceModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeExperienceBtn) {
    closeExperienceBtn.addEventListener('click', () => {
        editExperienceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// ========== CLOSE MODAL ON OUTSIDE CLICK ==========
document.addEventListener('click', (e) => {
    // Close Personal Modal
    if (editPersonalModal && e.target === editPersonalModal) {
        editPersonalModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close Skills Modal
    if (editSkillsModal && e.target === editSkillsModal) {
        editSkillsModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close Education Modal
    if (editEducationModal && e.target === editEducationModal) {
        editEducationModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    // Close Experience Modal
    if (editExperienceModal && e.target === editExperienceModal) {
        editExperienceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========== CLOSE MODAL ON ESC KEY ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (editPersonalModal) editPersonalModal.classList.remove('active');
        if (editSkillsModal) editSkillsModal.classList.remove('active');
        if (editEducationModal) editEducationModal.classList.remove('active');
        if (editExperienceModal) editExperienceModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ========== FORM VALIDATION ==========
const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                e.preventDefault();
                field.style.borderColor = 'var(--danger)';
                field.style.boxShadow = '0 0 0 3px rgb(239 68 68 / 0.1)';
                
                setTimeout(() => {
                    field.style.borderColor = '';
                    field.style.boxShadow = '';
                }, 3000);
            }
        });
    });
});

// ========== REMOVE ERROR BORDER ON INPUT ==========
const inputs = document.querySelectorAll('input, textarea, select');

inputs.forEach(input => {
    input.addEventListener('focus', () => {
        input.style.borderColor = '';
        input.style.boxShadow = '';
    });
});

// ========== PREVENT BODY SCROLL WHEN MODAL OPEN ==========
function preventScroll(e) {
    e.preventDefault();
}

document.addEventListener('DOMContentLoaded', () => {
    const modals = [
        editPersonalModal,
        editSkillsModal,
        editEducationModal,
        editExperienceModal
    ];

    modals.forEach(modal => {
        if (modal) {
            const observer = new MutationObserver(() => {
                if (modal.classList.contains('active')) {
                    document.body.style.overflow = 'hidden';
                } else {
                    document.body.style.overflow = 'auto';
                }
            });

            observer.observe(modal, { attributes: true });
        }
    });
});

// ========== SMOOTH SCROLL TO MODAL ==========
const editButtons = [
    editPersonalBtn,
    editSkillsBtn,
    editEducationBtn,
    editExperienceBtn
];

editButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            setTimeout(() => {
                const activeModal = document.querySelector('.edit-modal.active');
                if (activeModal) {
                    activeModal.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        });
    }
});

console.log('✅ Profile script loaded successfully!');
