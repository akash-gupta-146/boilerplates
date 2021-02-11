(function(){
    myForm.addEventListener('submit', function () {
        const file = myFile.files[0];
        let start = 0;
        let end = 0;
        let size = file.size;
        const chunkSize = 250;

       
        setTimeout(uploadFile,1);

        function uploadFile(){
            start = end;
            end = start+chunkSize;

            if( end > size ){
                end = size;
            }

            let slice = sliceFile(file,start,end);
            setTimeout(uploadChunk,1);

            function uploadChunk(){
                send(slice, start,end);
                if( end < size){
                    uploadFile();
                }
            }
        }

        function send(slice, start,end){
            // console.log(slice, start,end)
            let formData = new FormData();
            formData.append('file',slice);
            formData.append('start',start);
            formData.append('end',end);
            console.log(formData, start,end)
            // await fetch('/upload',{
            //     method: 'post',
            //     body:formData
            // })
        }

        function sliceFile(file,start,end){
            return file.slice.bind(file)(start,end)
        }
    })


})();