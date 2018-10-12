var date = {}

var getIdByTimeStampAndRandom = function(digit){
	if( digit<0 ){
		return '';
	}else{
		return Date.now()+getRandomString(digit);
	}
}

function getRandomString(length){
	var base = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var baseLen = base.length;
	var sb = []
	for (var i = 0; i < length; i++) {
            var number = getRandomNum(1,baseLen)
            sb.push(base.charAt(number));
    }
    return sb.join('');
}

function getRandomNum(Min,Max)
{   
var Range = Max - Min;   
var Rand = Math.random();   
return(Min + Math.round(Rand * Range));   
}

date.getIdByTimeStampAndRandom = getIdByTimeStampAndRandom;   

module.exports = date;