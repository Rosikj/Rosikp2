$(function(){

    let arrMap = ['Macedonia','Serbia','Croatia','Bulgaria'];
    let choice = true;
    let mapCLicked;
    let Sallary,Tech,Definition,Team,Industry,Product,Options,Location,Commute,OrgSize,Benefits;

    Sallary = [123,246,1235,823823];
    Tech = [123,1235,321,1];
    Definition = [2,555555,12345,1];
    Team = [4,5,2,1];
    Industry = [];
    Product = [];
    Options = [];
    Location = [];
    Commute = [];
    OrgSize = [];
    Benefits  = [];

    let by_Rank = [
    {
        name:  'Sallary',
        niza:  Sallary
    },
    {
        name:  'Tech',
        niza:  Tech
    },
    {
        name:  'Definition',
        niza:  Definition
    },
    {
        name:  'Team',
        niza:  Team
    }, {
        name:  'Industry',
        niza:  Industry
    }
    , {
        name:  'Product',
        niza:  Product
    }, {
        name:  'Options',
        niza:  Options
    }, {
        name:  'Location',
        niza:  Location
    }, {
        name:  'Commute',
        niza:  Commute
    }, {
        name:  'OrgSize',
        niza:  OrgSize
    }, {
        name:  'Benefits',
        niza:  Benefits
    }
    ];

    let SallaryV,TechV,DefinitionV,TeamV,IndustryV,ProductV,OptionsV,LocationV,CommuteV,OrgSizeV,BenefitsV;

    SallaryV = [1,2,3,4];
    TechV = [4,4,4,1];
    DefinitionV = [1000,1000,1000,1];
    TeamV = [11111,2222,3333,12345];
    IndustryV = [];
    ProductV = [];
    OptionsV = [];
    LocationV = [];
    CommuteV = [];
    OrgSizeV = [];
    BenefitsV = [];

    let by_Value = [
    {
        name:  'Sallary',
        niza:  SallaryV
    },
    {
        name:  'Tech',
        niza:  TechV
    },
    {
        name:  'Definition',
        niza:  DefinitionV
    },
    {
        name:  'Team',
        niza:  TeamV
    }, {
        name:  'Industry',
        niza:  IndustryV
    }
    , {
        name:  'Product',
        niza:  ProductV
    }, {
        name:  'Options',
        niza:  OptionsV
    }, {
        name:  'Location',
        niza:  LocationV
    }, {
        name:  'Commute',
        niza:  CommuteV
    }, {
        name:  'OrgSize',
        niza:  OrgSizeV
    }, {
        name:  'Benefits',
        niza:  BenefitsV
    }
    ]

    // arrays for results it stores them from highest to lowest.
    $('svg').children('g').children('path').nextAll('path').css({fill: 'black'});

    $(".counter").css({ opacity: '0' });
    let x = 0;
    //Clicks for the map-countries
    $('.mapLinks').click(function(e){
        mapCLicked = $(this).attr('id');
        $(".countryTeller").text = `${mapCLicked}`;
        console.log(mapCLicked);
        e.preventDefault();
        // $('.mapLinks').not($(this)).children('path').css({fill: 'white'});
        // $(this).children('path').css({fill: 'lightgrey'});
        let allLi = document.querySelectorAll('.buttonsOverMap li');
        let newArr = Array.from(allLi);
        let triggeredLi = newArr.filter((element)=> {
            return element.classList.contains('triggered');
        });
        let clicked = triggeredLi[0].id;

        if(mapCLicked === "Macedonia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Serbia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Bulgaria"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Croatia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }else{
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

            $(".lowestCountry").text = `${arrMap[0]}`;
            $(".highestCountry").text = `${arrMap[2]}`;

    });

    // Buttons over map 
    $('.buttonsOverMap li').click(function(){
        $(this).addClass('newColor');
        $(this).addClass('triggered');
        $(".buttonsOverMap li").not($(this)).removeClass('triggered');
        // console.log($(this));
        $('.buttonsOverMap li').not($(this)).removeClass('newColor');
    });
    function trigger(e){

        const clicked = e.currentTarget.id;

        const spans = document.querySelectorAll('.counter');

        $(".overMapMiniText").innerText = `${clicked}`;            


        if(mapCLicked === "Macedonia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Serbia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Bulgaria"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Croatia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }else{
            $(".overMapMiniText").text = "Not Selected";            
        }   

        if(choice){
           let found = by_Rank.filter(element => {
            return clicked === element.name;
        })
           found[0].niza.sort((a, b)=> a - b);
           console.log(found[0].niza);


           $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
           $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
           $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
           $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
       }else{
           let found = by_Value.filter(element => {
            return clicked === element.name;
        })
           found[0].niza.sort((a, b)=> a - b);
           console.log(found[0].niza);
           $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
           $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
           $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
           $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
       }
       $(".lowestCountry").text = `${arrMap[0]}`;
       $(".highestCountry").text = `${arrMap[2]}`;
   }


   document.querySelectorAll('.buttonsOverMap li').forEach( function(element, index) {
        element.addEventListener('click', trigger);
    });

    //by value and by ranking 
    $('.byRanking').click(function(){
        $(this).css({background:"#6630D8"});
        $(this).next('span').css({ background: "#333" });
        choice = true;
        let allLi = document.querySelectorAll('.buttonsOverMap li');
        let newArr = Array.from(allLi);
        // console.log(newArr);
        let triggeredLi = newArr.filter((element)=> {
            return element.classList.contains('triggered');
        });
        // console.log(triggeredLi);
        let clicked = triggeredLi[0].id;

        if(mapCLicked === "Macedonia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Serbia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Bulgaria"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Croatia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }else{
            $(".overMapMiniText").text = "Not Selected";           

        }

        if(choice){
           let found = by_Rank.filter(element => {
            return clicked === element.name;
        })
           found[0].niza.sort((a, b)=> a - b);
           console.log(found[0].niza);
           $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
           $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
           $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
           $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
       }else{
           let found = by_Value.filter(element => {
            return clicked === element.name;
        })
           found[0].niza.sort((a, b)=> a - b);
           console.log(found[0].niza);
           $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
           $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
           $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
           $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
       }

       $(".lowestCountry").text = `${arrMap[0]}`;
       $(".highestCountry").text = `${arrMap[2]}`;

   });
    $('.byValue').click(function(){
        $(this).css({background:"#6630D8"});
        $(this).prev('span').css({ background: "#333" });
        choice = false;
        let allLi = document.querySelectorAll('.buttonsOverMap li');
        let newArr = Array.from(allLi);
        let triggeredLi = newArr.filter((element)=> {
            return element.classList.contains('triggered');
        });
        let clicked = triggeredLi[0].id;

        if(mapCLicked === "Macedonia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Serbia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Bulgaria"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }
        if(mapCLicked === "Croatia"){

            if(clicked === 'Sallary'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Tech'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Definition'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Team'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Industry'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Product'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Options'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Location'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Commute'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'OrgSize'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }else if(clicked === 'Benefits'){
                arrMap = [];
                spans[0].innerText = '';
                spans[1].innerText = '';
                spans[2].innerText = '';
                spans[3].innerText = '';
                spans[4].innerText = '';
                spans[5].innerText = '';
                spans[6].innerText = '';
                spans[7].innerText = '';
                spans[8].innerText = '';
                spans[9].innerText = '';
                spans[10].innerText = '';
            }
        }else{
            $(".overMapMiniText").text = "Not Selected";           
        } 

        if(choice){
           let found = by_Rank.filter(element => {
            return clicked === element.name;
        })
           found[0].niza.sort((a, b)=> a - b);
           console.log(found[0].niza);
           $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
           $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
           $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
           $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
       }else{
           let found = by_Value.filter(element => {
            return clicked === element.name;
        })
           found[0].niza.sort((a, b)=> a - b);
           console.log(found[0].niza);
           $(`#${arrMap[0]}`).children('path').css({ fill: '#D83C6B' });
           $(`#${arrMap[1]}`).children('path').css({ fill: '#7738FF' });
           $(`#${arrMap[2]}`).children('path').css({ fill: '#56D7DD' });
           $(`#${arrMap[3]}`).children('path').css({ fill: '#ccc' });
       }

       $(".lowestCountry").text = `${arrMap[0]}`;
       $(".highestCountry").text = `${arrMap[2]}`;

   });
});