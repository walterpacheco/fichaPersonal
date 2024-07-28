document.addEventListener('DOMContentLoaded', () => {
    const fullName = localStorage.getItem('fullName');
    const birthDate = new Date(localStorage.getItem('birthDate'));
    const bloodType = localStorage.getItem('bloodType');
    const passportIssueDate = new Date(localStorage.getItem('passportIssueDate'));
    const passportExpiry = new Date(localStorage.getItem('passportExpiry'));
    const idIssueDate = new Date(localStorage.getItem('idIssueDate'));
    const idExpiry = new Date(localStorage.getItem('idExpiry'));
    const insurance = localStorage.getItem('insurance');
    const hasLicense = localStorage.getItem('hasLicense');
    const licenseIssueDate = hasLicense === 'yes' ? new Date(localStorage.getItem('licenseIssueDate')) : null;
    const licenseExpiryDate = hasLicense === 'yes' ? new Date(localStorage.getItem('licenseExpiryDate')) : null;
    const today = new Date();

    // Calcular la edad
    const age = calculateAge(birthDate, today);

    // Calcular vigencia restante del pasaporte
    const passportRemaining = calculateRemainingTime(today, passportExpiry);

    // Calcular vigencia restante de la cédula
    const idRemaining = calculateRemainingTime(today, idExpiry);

    // Mostrar resultados
    document.getElementById('fullName').textContent = fullName;
    document.getElementById('currentAge').textContent = `${age.years} años, ${age.months} meses y ${age.days} días`;
    document.getElementById('bloodType').textContent = bloodType;
    document.getElementById('passportRemaining').textContent = formatRemainingTime(passportRemaining);
    document.getElementById('idRemaining').textContent = formatRemainingTime(idRemaining);
    document.getElementById('insurance').textContent = insurance || 'No especificado';
    document.getElementById('hasLicense').textContent = hasLicense === 'yes' ? 'Sí' : 'No';

    if (hasLicense === 'yes' && licenseIssueDate && licenseExpiryDate) {
        const licenseRemaining = calculateRemainingTime(today, licenseExpiryDate);
        document.getElementById('licenseRemaining').textContent = formatRemainingTime(licenseRemaining);
        document.getElementById('licenseDetailsResult').style.display = 'block';
    }

    function calculateAge(birthDate, currentDate) {
        let years = currentDate.getFullYear() - birthDate.getFullYear();
        let months = currentDate.getMonth() - birthDate.getMonth();
        let days = currentDate.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }

    function calculateRemainingTime(currentDate, expiryDate) {
        let years = expiryDate.getFullYear() - currentDate.getFullYear();
        let months = expiryDate.getMonth() - currentDate.getMonth();
        let days = expiryDate.getDate() - currentDate.getDate();

        if (days < 0) {
            months--;
            days += new Date(expiryDate.getFullYear(), expiryDate.getMonth(), 0).getDate();
        }

        if (months < 0) {
            years--;
            months += 12;
        }

        return { years, months, days };
    }

    function formatRemainingTime(time) {
        return `${time.years} años, ${time.months} meses y ${time.days} días`;
    }
});
