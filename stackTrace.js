var btnSave = document.getElementById('save');
var btnDump = document.getElementById('dump');
var display = document.getElementById('textField');
var input;
var list = linkedListGenerator();
var counter = 0;
var newList = document.getElementById('newList');



btnSave.addEventListener('click',function(){

	input = display.value;
	list.add(input);
	counter++;


});

btnDump.addEventListener('click',function(){
	for(var i =0; i< counter; i++){
		var clearBtn = document.createElement('Button');
			clearBtn.innerHTML = 'x';
			clearBtn.addEventListener('onclick', function(){
			alert('remove');
			});
		var	temp = document.createElement('div');	
			temp.innerHTML = list.get(i).value;
			temp.appendChild(clearBtn);

		var bridge = document.createElement('div');
			bridge.appendChild(temp);
			newList.appendChild(bridge);

	}


});
