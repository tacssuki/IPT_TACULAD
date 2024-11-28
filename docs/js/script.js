document.getElementById('downloadBiodata').addEventListener('click', function (event) {
    event.preventDefault(); 

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    fetch('/HTML/bioData.html')
        .then(response => response.text())
        .then(htmlContent => {
            pdf.html(htmlContent, {
                callback: function (doc) {
                    doc.save('Biodata.pdf');
                },
                x: 10,
                y: 10
            });
        })
        .catch(error => {
            console.error('Error generating PDF:', error);
        });
});