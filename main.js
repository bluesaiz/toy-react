import {ToyReact, Compoment} from './ToyReact.js'

class MyCompoment extends Compoment{

    render(){
        return (
            <div>
                <div>hello</div>
                {true}
                {this.children}
            </div>
        )
    }

}



let a = <MyCompoment name="aaa" >
    <div>child</div>
    <div>child2</div>
</MyCompoment>

ToyReact.render(a, document.body)
