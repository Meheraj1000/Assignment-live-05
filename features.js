function getInputValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
     return inputNumber;
    }
    function getAddMonayById(id){
        const AddMonay=document.getElementById(id).innerText;
        const AddNumber=parseFloat(AddMonay);
        return AddNumber;
    }
    function getEvenMonayById(id){
        const evenMonay=document.getElementById(id).innerText;
        const EvenNumber=parseFloat(evenMonay);
        return EvenNumber;
    }
    
    // Button show 
    function ButtonShowById(id){
        document.getElementById('show-the-Donation').classList.add('hidden');
        document.getElementById('show-the-History').classList.add('hidden');
        document.getElementById(id).classList.remove('hidden');
    }
    
    
    