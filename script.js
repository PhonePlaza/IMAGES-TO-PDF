var imgData = ""
 
    function encodeImage(image) {

        var img = image.files[0]
 
        var file = new FileReader()
 
        file.onloadend = function () {
            console.log(file.result)
            imgData = file.result
        }
 
        file.readAsDataURL(img)
 
    }
    function loadImg(event) {
        showImg = document.getElementById('showImg');
        showImg.src = URL.createObjectURL(event.target.files[0]);
    }
    function createPDF() {
        var doc = new jsPDF("p", "mm", "a4");
 
        var width = doc.internal.pageSize.getWidth();
        var height = doc.internal.pageSize.getHeight();
        doc.addImage(imgData, 'PNG', 0, 0, width, height)
        doc.save("PDF.pdf") // แก้ชื่อได้หลังจาก Download
    }