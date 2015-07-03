



    //没有功能 有问题
menu_line();

function menu_line(){
        var linePosition = 0, menuLine = $('#menu_line'), lineWidth, defaultPosition, defaultWidth;
        $('.nav > li').each(function () {
            if ($(this).hasClass('active')) {
                defaultWidth = lineWidth = this.width();
                defaultPosition = linePosition = this.position().left;
            }
            menuLine.css('width', lineWidth);
            menuLine.css('left', linePosition);
           
        })
}