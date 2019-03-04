const inputs = document.querySelectorAll('input')
console.log(inputs)


function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    // console.log(this.dataset);
    // console.log(suffix);
    // console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
    console.log(this.value)
}

inputs.forEach(input => input.addEventListener('input', handleUpdate));

