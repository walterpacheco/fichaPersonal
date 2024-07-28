document.addEventListener('DOMContentLoaded', () => {
    const infoForm = document.getElementById('infoForm');
    const hasInsuranceSelect = document.getElementById('hasInsurance');
    const insuranceDetails = document.getElementById('insuranceDetails');
    const hasLicenseSelect = document.getElementById('hasLicense');
    const licenseDetails = document.getElementById('licenseDetails');

    hasInsuranceSelect.addEventListener('change', () => {
        if (hasInsuranceSelect.value === 'yes') {
            insuranceDetails.style.display = 'block';
            document.getElementById('insurance').required = true;
        } else {
            insuranceDetails.style.display = 'none';
            document.getElementById('insurance').required = false;
        }
    });

    hasLicenseSelect.addEventListener('change', () => {
        if (hasLicenseSelect.value === 'yes') {
            licenseDetails.style.display = 'block';
            document.getElementById('licenseIssueDate').required = true;
            document.getElementById('licenseExpiryDate').required = true;
        } else {
            licenseDetails.style.display = 'none';
            document.getElementById('licenseIssueDate').required = false;
            document.getElementById('licenseExpiryDate').required = false;
        }
    });

    infoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const fullName = document.getElementById('fullName').value.trim();
        const birthDate = document.getElementById('birthDate').value;
        const bloodType = document.getElementById('bloodType').value.trim();
        const passportIssueDate = document.getElementById('passportIssueDate').value;
        const passportExpiry = document.getElementById('passportExpiry').value;
        const idIssueDate = document.getElementById('idIssueDate').value;
        const idExpiry = document.getElementById('idExpiry').value;
        const hasInsurance = document.getElementById('hasInsurance').value;
        const insurance = document.getElementById('insurance').value.trim();
        const hasLicense = document.getElementById('hasLicense').value;
        const licenseIssueDate = document.getElementById('licenseIssueDate').value;
        const licenseExpiryDate = document.getElementById('licenseExpiryDate').value;

        // Guardar datos en localStorage
        localStorage.setItem('fullName', fullName);
        localStorage.setItem('birthDate', birthDate);
        localStorage.setItem('bloodType', bloodType);
        localStorage.setItem('passportIssueDate', passportIssueDate);
        localStorage.setItem('passportExpiry', passportExpiry);
        localStorage.setItem('idIssueDate', idIssueDate);
        localStorage.setItem('idExpiry', idExpiry);
        localStorage.setItem('hasInsurance', hasInsurance);
        if (hasInsurance === 'yes') {
            localStorage.setItem('insurance', insurance);
        } else {
            localStorage.removeItem('insurance');
        }
        localStorage.setItem('hasLicense', hasLicense);
        if (hasLicense === 'yes') {
            localStorage.setItem('licenseIssueDate', licenseIssueDate);
            localStorage.setItem('licenseExpiryDate', licenseExpiryDate);
        } else {
            localStorage.removeItem('licenseIssueDate');
            localStorage.removeItem('licenseExpiryDate');
        }

        // Redirigir a la página de resultados
        window.location.href = 'resultados.html';
    });
});
