$(function() {
    let arrMap = ['Macedonia','Serbia','Bulgaria','Croatia'];
    let choice = true;
    let mapCLicked = undefined;

    // arrays for results it stores them from highest to lowest.
    $('svg').children('g').children('path').nextAll('path').css({fill: 'black'});

    $(".counter").css({ opacity: '0' });
    let x = 0;
    //Clicks for the map-countries
    $('.mapLinks').click(function(e){
        mapCLicked = $(this).attr('id');
        $(".countryTeller").text = `${mapCLicked}`;
        e.preventDefault();

        $('.mapLinks').not($(this)).children('path').css({fill: 'white'});
        $(this).children('path').css({fill: 'lightgrey'});

        if(mapCLicked === "macedonia"){
            
        }else if(mapCLicked === "serbia"){
            
        }else if(mapCLicked === "croatia"){
            
        }else if(mapCLicked === "bulgaria"){
            
        }
        else{
            $(".countryTeller").text = `No Country Seleced`;            
        }
        let spanss = $(".counter");
        for(let i = 0; i < spanss.length; i++){
            $(spanss[i]).delay(i * 50).animate({ opacity: '1' });
        }

            $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
            $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
            $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
            $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });

            $(".lowestCountry").text = `${arrMap[3]}`;
            $(".highestCountry").text = `${arrMap[0]}`;

    });

    // Buttons over map 
    $('.buttonsOverMap li').click(function(){
        $(this).addClass('newColor');
        $(this).addClass('triggered');
        $(".buttonsOverMap li").not($(this)).removeClass('triggered');
        $('.buttonsOverMap li').not($(this)).removeClass('newColor');
    });
    function trigger(e){

        const clicked = e.currentTarget.id;

        const spans = document.querySelectorAll('.counter');

        $(".overMapMiniText").innerText = `${clicked}`;


        if(clicked === 'Sallary'){
            
        }else if(clicked === 'Tech'){
            
        }else if(clicked === 'Definition'){
                    
        }else if(clicked === 'Team'){
                        
        }else if(clicked === 'Industry'){
                        
        }else if(clicked === 'Product'){
                        
        }else if(clicked === 'Options'){
                        
        }else if(clicked === 'Location'){
                        
        }else if(clicked === 'Commute'){
                        
        }else if(clicked === 'OrgSize'){
            
        }else if(clicked === 'Benefits'){
                    
        }else{
            $(".overMapMiniText").text = "Not Selected";
        }   


        if(choice){


            $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
            $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
            $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
            $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
        }else{
            
            $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
            $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
            $(`#${arrMap[2  ]}`).children('path').css({ fill: '#56D7DD' });
            $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
        }
        $(".lowestCountry").text = `${arrMap[3]}`;
        $(".highestCountry").text = `${arrMap[0]}`;
    }


    document.querySelectorAll('.buttonsOverMap li').forEach( function(element, index) {
        element.addEventListener('click', trigger);
    });

//by value and by ranking 
    $('.byRanking').click(function(){
        $(this).css({background:"#6630D8"});
        $(this).next('span').css({ background: "#333" });
        choice = true;
        
        if(choice){
        
        $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
        $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
        $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
        $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
    }else{
        
        $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
        $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
        $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
        $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
    }

    });
    $('.byValue').click(function(){
        $(this).css({background:"#6630D8"});
        $(this).prev('span').css({ background: "#333" });
        choice = false;
        
        if(choice){
        
        $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
        $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
        $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
        $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
    }else{
        $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
        $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
        $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
        $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
    }

    

    });
});


