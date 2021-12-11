<script type="text/javascript">
        
        var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        if (/android/i.test(userAgent)) {
             document.getElementsByClassName('')[0].style.visibility = 'hidden';
            document.getElementsByClassName('wi')[0].style.display = 'none';
        }
       
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
             document.getElementsByClassName('android')[0].style.visibility = 'hidden';
            document.getElementsByClassName('android')[0].style.display = 'none';
        }
    </script>