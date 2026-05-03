document.addEventListener('DOMContentLoaded', () => {
    const verBtn = document.getElementById('proposalBtn');
    const messageDiv = document.getElementById('message');
    const acceptCheck = document.getElementById('acceptCheckbox');
    const finalBtn = document.getElementById('finalAcceptBtn');
    const finalMsg = document.getElementById('finalMessage');

    verBtn.addEventListener('click', () => {
        verBtn.style.display = 'none';
        messageDiv.classList.remove('hidden');

        // efectos simples sin cursilería
        const icono = document.querySelector('.icon');
        if (icono) {
            icono.style.transform = 'scale(1.1)';
            setTimeout(() => {
                icono.style.transform = 'scale(1)';
            }, 200);
        }

        // scroll suave al contrato
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    acceptCheck.addEventListener('change', () => {
        finalBtn.disabled = !acceptCheck.checked;
    });

    finalBtn.addEventListener('click', () => {
        // ocultar cláusulas y mostrar final directo
        const clausulasDiv = document.querySelector('.clausulas');
        if (clausulasDiv) {
            clausulasDiv.style.opacity = '0';
            setTimeout(() => {
                clausulasDiv.style.display = 'none';
                finalMsg.classList.remove('hidden');
            }, 200);
        } else {
            finalMsg.classList.remove('hidden');
        }

        // pequeños efectos sin exagerar
        finalMsg.style.animation = 'none';
        setTimeout(() => {
            finalMsg.style.animation = 'fadeScale 0.4s ease';
        }, 10);
    });
});