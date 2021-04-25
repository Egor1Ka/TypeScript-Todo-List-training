import React, { useRef, useState } from 'react';

interface TodoFormProps{
    onAdd(title:string):void

}

export const TodoForm:React.FC<TodoFormProps> =(props)=>{

    /*let [input,setInput] = useState<string>('');
    const chengeHendler = (evant:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(evant.target.value);
    }*/

    const ref = useRef<HTMLInputElement>(null);

    const kayPresHendler = (evant:React.KeyboardEvent)=>{
        if(evant.key ==='Enter'){
            /*console.log(input); 
            setInput('');*/
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
        }
    }

    return(
        <div>
            <div className="Nameform-floating mb-3" style={{paddingTop:'25px'}}>
                <input //value ={input} onChange = {chengeHendler}
                    onKeyPress ={kayPresHendler}
                    ref={ref}
                    type="email" className="form-control" id="floatingInput" 
                    placeholder="name todo"/>
            </div>
        </div>
    )
}