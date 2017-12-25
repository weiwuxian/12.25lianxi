;(function($){
    $.ajax({
        url:"data/data.json",
        success:function(data){
            auto(data.data);

        }
    })
    function auto(d){
        $.each(d,function(v,i){
            //console.log(i);
            var tit = $("<h6>"+i.tit+"</h6>")
            tit.appendTo("ul li")
            $.each(i.tt,function(a,b){
                console.log(b)
                var th = $("<tr><th>"+b+"</th></tr>");
                th.appendTo("table thead");
            })
            $.each(i.sj,function(c,x){
                console.log(x);
                var td = $("<tr><td>"+x+"</th></tr>");
                td.appendTo("table tbody")
            })
            
        })
    }
})(jQuery)