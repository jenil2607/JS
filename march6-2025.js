function greetpeople(full_name, language){
    switch(language){
        case'hindi':
            console.log(`namaste ${full_name}`);
            break;
        case'english':
            console.log(`hi, ${full_name}  how are you???`);
            break;
        default:
            console.log("bye")
    }
}
greetpeople("jenil",'english')