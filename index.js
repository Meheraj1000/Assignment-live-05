// Aid
document.getElementById('aid-donate')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const input = getInputValueById('input-donate');
        const AddDonate = getAddMonayById('add-moany');

        if (isNaN(input)||input<0) {
            alert('Failed to Donate');
            return;
        }
        const NewMonay = input + AddDonate;
        document.getElementById('add-moany').innerText = NewMonay;
        const EvenDonate = getEvenMonayById('even-Monay');
        const AvarMonay = EvenDonate - input;
        document.getElementById('even-Monay').innerText = AvarMonay;

        // transaction history
        const p = document.createElement('p');
        p.innerText = ` ${input} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
        document.getElementById('Transaction-history-ari').appendChild(p);
        //Time
        const h1=document.createElement('h1');
        h1.innerHTML=Date();
        document.getElementById('Transaction-history-ari').appendChild(h1);
    

    })
// Feni
document.getElementById('feni-Donate-Now')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const inputFeni = getInputValueById('feni-input');
        const AddFaniDonate = getAddMonayById('feni-add-monay');

        if (isNaN(inputFeni)||inputFeni<0) {
            alert('Failed to Donate');
            return;
        }

        const NewFeniMonay = inputFeni + AddFaniDonate;
        document.getElementById('feni-add-monay').innerText = NewFeniMonay;
        const EvenDonate = getEvenMonayById('even-Monay');
        const AvarMonay = EvenDonate - inputFeni;
        document.getElementById('even-Monay').innerText = AvarMonay;

         // transaction history
         const p = document.createElement('p');
         p.innerText = ` ${inputFeni} Taka is Donated for famine-2024 at Feni,Bangladesh`;
         document.getElementById('Transaction-history').appendChild(p);

         //Time
        const h1=document.createElement('h1');
        h1.innerHTML=Date();
        document.getElementById('Transaction-history').appendChild(h1);
    
    })

// 
document.getElementById('Noakhali-Donate-Now')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const inputNoak = getInputValueById('Noakhali-input');
        const AddNoakDonate = getAddMonayById('Noakhali-Add-monay');

        if (isNaN(inputNoak)||inputNoak<0) {
            alert('Failed to Donate');
            return;
        }

        const NewNoakMonay = inputNoak + AddNoakDonate;
        document.getElementById('Noakhali-Add-monay').innerText = NewNoakMonay;
        const EvenDonate = getEvenMonayById('even-Monay');
        const AvarMonay = EvenDonate - inputNoak;
        document.getElementById('even-Monay').innerText = AvarMonay;

         // transaction history
         const p = document.createElement('p');
         p.innerText = ` ${inputNoak} Taka is Donated for famine-2024 at Noakhali,Bangladesh`;
         document.getElementById('Transaction-history-Noakil').appendChild(p);

         //Time
        const h1=document.createElement('h1');
        h1.innerHTML=Date();
        document.getElementById('Transaction-history-Noakil').appendChild(h1);
    
    })

document.getElementById('btn-Donation')
    .addEventListener('click', function () {
        //document.style.background='green';
        ButtonShowById('show-the-Donation');
    })
document.getElementById('btn-History')
    .addEventListener('click', function () {
        ButtonShowById('show-the-History');
    })