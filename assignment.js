//1
//Feet_To_Mile


function feetToMile(feet){
    if(feet<0){
        return 'Invalid Input';
    }
    else{
        var mile = 0.000189394*feet;
        return mile.toFixed(7) +' miles';
    }
}

// testCheck
var conversion = feetToMile(2);
console.log(conversion);

// 2
// Wood_Calculator

function woodCalculator(chair,table,bed){
    if(chair <0 || table  <0 || bed <0){
        return 'Invalid Input';
    }
    else if((chair % 1 != 0) || (table % 1 != 0) || (bed % 1 != 0)){
        return 'Invalid Input';
    }
    else{
        var wood = chair + (table*3) + (bed*5);
        return wood + ' Cubic feet wood';
    }
}

// testCheck
var woodcount = woodCalculator(3,5,7);
console.log(woodcount);

// 3
// Brick_Calculator

function brickCalculator(numberOfStories){
    var brick = 0;
    if(numberOfStories<0 || numberOfStories % 1 !=0){
        return 'Invalid Input';
    }
    else if(numberOfStories<=10){
        brick = numberOfStories * 15000;
        return brick;
    }
    else if(numberOfStories<=20 && numberOfStories>10){
        var afterten = (numberOfStories -10)*12000;
        brick = 150000 + afterten;
        return brick + ' Bricks';
    }
    else{
        var aftertwenty = (numberOfStories -20)*10000;
        brick = 150000 + 120000 + aftertwenty;
        return brick + ' Bricks';
    }
    
}

// testCheck
var stories = brickCalculator(41);
console.log(stories);

// 4
// Tiny_Friend

function tinyFriend(friends){
    if(friends.length === 0){
        return 'Invalid Input';
    }
    else{
        for(i=0;i<friends.length;i++){
            if(friends[i].length===0){
                return 'Invalid Input';
            }
        }
        var small = friends[0];
        for(i=0;i<friends.length;i++){
        if(small.length>friends[i].length){
        small = friends[i];
        }

    }
        return small;

    }
}

// testCheck

friendsArray = ['Rakesh' , 'Nirmolendu' ,'Ronobir', 'Protik', 'Saad', 'Nibir'];
var tiny = tinyFriend(friendsArray);
console.log(tiny);