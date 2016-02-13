var max_frq = 0;
var max_frq_set = new Array();

function updateMaxSet(index, tag, frq){
	if (frq > max_frq){
		max_frq_set = [index, tag, frq];
		max_frq = frq;
	}
}

function alertSpan(span_id){
	console.log(span_id, typeof(span_id));
	//var temp = document.getElementById('span_id');
	var temp = span_id;
	var temp_id = temp.getAttribute('id');
	var temp_frq = temp.getAttribute('value');
	alert(temp_id + ": "+temp_frq + " occurences");
}

function createDiv(div_id, tag_id){
	var tagDiv = document.createElement('div');
	tagDiv.setAttribute('id',div_id);
	for (var i = 0; i < tag_id.length; i++){
		var tag_span = document.createElement('span');
		tag_span.setAttribute('id',tag_id[i]);
		tag_span.innerHTML = tag_id[i]+" ";
		tagDiv.appendChild(tag_span);
	}
	return tagDiv;
}

function setSpan(div, tag_frq){
	var spans = div.childNodes;
	for (var i = 0; i < tag_frq.length; i++){
		var size = Math.floor(tag_frq[i] / max_frq * 20) + 15;
		spans[i].style.fontSize = size + 'pt';
		spans[i].setAttribute('value',tag_frq[i]);
		spans[i].style.padding = '5px';
		//spans[i].style.display = 'inline-block';

		var span_id = spans[i].getAttribute('id');
		spans[i].setAttribute('onclick','alertSpan('+span_id+')');
		spans[i].setAttribute('onclick','alertSpan('+span_id+')');

	}
}

function makeCloud(){
	console.log(document.cookie);
	var str_text = document.getElementById('tags').value.split(" ").sort();
	//alert(str_text);
	var tag_id = new Array();
	var tag_frq = new Array();
	var tag_name = "";
	var frq = 0;
	var temp_ary = str_text;
	console.log(str_text);
	var max_frq;
	var index = 0;
	//tag_id[0] = "";
	tag_frq[0] = 0;
	while (temp_ary.length > 0){
		var tag = temp_ary.shift();
		if (tag_id[index]!= tag){
			if (tag_frq[index] != 0){
				updateMaxSet(index, tag_id[index], tag_frq[index])
				index++;
			}
			tag_id[index] = tag;
			tag_frq[index] = 1;
		}
		else if (tag_id[index] == tag){
			tag_frq[index]++;
		}
	}

	console.log(tag_id.length, tag_frq.length);
	console.log(tag_id);
	console.log(tag_frq);
	console.log(max_frq_set);

	tagDiv = createDiv('tagDiv',tag_id);
	tagDiv.style.border = '.1em solid silver';
	tagDiv.style.backgroundColor = 'blue';
	tagDiv.style.color = 'silver';
	tagDiv.style.font = 'xx-large serif';
	//tagDiv.style.overflow = 'auto';

	setSpan(tagDiv, tag_frq);
	//tagDiv.style.height = 'auto';

	var ele_body = document.getElementsByTagName('body')[0];
	var old_div = document.getElementsByTagName('div')[0];
	ele_body.replaceChild(tagDiv, old_div);

}

function saveCloud(){
	var str_text = document.getElementById('tags').value;
	
	var expiredate = Date()
	//document.cookie = "textarea ="+str_text+"; expires = "+expiredate.toGMTstring();
	document.cookie = "textarea ="+str_text ;
	console.log(str_text);
	console.log(document.cookie);
}

function loadCloud(){
	var cookie_str = document.cookie.split(';')[0].split('=')[1];
	document.getElementById('tags').value = cookie_str;
}

function clearArea(){
	document.getElementById('tags').value = "";
	
}