setInterval(function() {
    if(document.querySelector('.op-soft-checkbox')) 
        document.querySelector('.op-soft-checkbox').checked = '';

    var content_left = document.getElementById('content_left');
    if(content_left) {
        var childNodes = content_left.children;
        for(var i = 0, len = childNodes.length; i<len; i++) {
            var node = childNodes[i];
            var classList = node ? node.classList : false;
            if(classList && !classList.contains('c-container')) { 
                node.parentNode.removeChild(node);
            }

        }
    }
}, 1000);
