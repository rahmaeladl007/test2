var firstName=document.getElementById("firstName");
var secondName=document.getElementById("secondName" );
var thirdName=document.getElementById("thirdName");
var job=document.getElementById("job");
var company=document.getElementById("company");
var salary=document.getElementById("salary");
var inputPassword4=document.getElementById("inputPassword4");
function register() {
    if (validateFristName(), validatesecondName() ,validatethirdName(),validatejob ,validatecompany()==true) {
        var registerForm={
            firstName:firstName.value,
            secondName:secondName.value,
            thirdName:thirdName.value,
            job:job.value,
            company:company.value,
            salary:salary.value,
            inputPassword4:inputPassword4.value, 
    }
         }else
         {
            alert('must include only letters');
         }
         if ( validateSalary()  ==true) {
            var registerForm={
                firstName:firstName.value,
                secondName:secondName.value,
                thirdName:thirdName.value,
                job:job.value,
                company:company.value,
                salary:salary.value,
                inputPassword4:inputPassword4.value, 
        }
             }else
             {
                alert('must include number');
             }
      
  
         if (validateInputPassword4() ==true) {
            var registerForm={
                firstName:firstName.value,
                secondName:secondName.value,
                thirdName:thirdName.value,
                job:job.value,
                company:company.value,
                salary:salary.value,
                inputPassword4:inputPassword4.value, 
        }
             }else
             {
                alert('must include number,letter,Symbols');
             }
      
        
         console.log(registerForm);
}
register();
function validateFristName()
{
    var x = /^[a-z]{2,}$/;
    if(x.test(firstName.value)==true)
    {
        return true;
    
       
    }  
   
    false
   
}
   function validatesecondName() {
    var y=/^[a-z]{2,}$/;
    if (y.test(secondName.value)==true) {
        return true;
    }

    
        false
       
    } 
    function validatethirdName() {
        var z=/^[a-z]{2,}$/;
        if (z.test(thirdName.value)==true) {
            return true;
        }
    
        
            false
           
        } 
  function validatejob() {
    var c=/^[a-z]{2,}$/;
    if (c.test(job.value)== true) {
        return true;
        
    }
    false

  }
  function validatecompany() {
    var w=/^[a-z]{2,}$/;
    if (w.test(company.value)== true) {
        return true;
        
    }
    false
  }
  function validateSalary() {
    var q=/^[0-9]{2,}$/;
    if (q.test(salary.value)== true) {
        return true;
        
    }
    false
  }
  function validateInputPassword4() {
    var q=/^[0-9]|[a-z]|[-',*]{2,}$/;
    if (q.test(inputPassword4.value)== true) {
        return true;
        
    }
    false
  }
