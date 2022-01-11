const input = { 
	a1: '标题1', 
	b2: '标题2', 
	x3: { 
 		d: '段落1', 
   	m: 12,
    	k: true,
     	c7: { 
      	    s: 'abc',
       	    k: []
        	}
     }
 }
function getSummary(item,res=''){  
        if(item&&typeof item=='string'){
            res=res+item
            return 
        }else if(item&&typeof item==='object'){
            for(let key in item){
                getSummary(item[key],res)
            }
        }
}
console.log(getSummary(input))
// 输出:
// '标题1标题2段落1abc'