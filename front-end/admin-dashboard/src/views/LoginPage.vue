<template>
  <div class="col-8 col-md-5 col-lg-4 col-xl-6 m-auto h-75 mt-5 text-dark"> 
    <form action="" method="post" class="form border rounded " id="form" >
       <div class="form-floating mx-5  mb-2 mt-5">
         <input type="email" class="form-control  text-center " placeholder="Email" name="email" v-model="Email" required>
           <label class="text-dark">  
               <i class="bi bi-person-circle float-l"> Email</i>
            </label>
       </div>
       <div class="form-floating mx-5 mb-2">
          <input type="password" class="form-control text-center" placeholder="Password" name="pass" v-model="pass" required> 
            <label class="text-dark text-center m-auto"> 
              <i class="bi bi-eye-slash"> Password</i>
            </label>
             <button class="btn btn-outline  form-control text-center bt-0 pb-1 mt-3" value="submet" >
                Submet
                  </button>  
                  </div>  
                  <p> Forget<a href=""> password ? </a> </p>
                  <div>
                         <P  class="mb-auto">or</P>
                           <div>
                            <a href="#"><i class="bi bi-twitter m-1"></i></a>
                            <a href="#" ><i class="bi bi-facebook m-1"></i></a>
                            <a href="#"><i class="bi bi-google m-1"></i></a>
                          </div>
                  </div>
                  
                 <p> dont have an account ? <a href="#"> Register Now</a></p>
                  
       </form>
    </div> 
 
</template>
<script>
// @ is an alias   /src 

export default {
  
}
</script>
<style>
  .btn {
    color: #fff;
    background-color: #270330;
  }
  .btn:hover, .btn:active {
    color: #270330;
    background-color: #fff;
    border: 1px solid #270330;
  }
 a {
   color:#270330;
   text-decoration: none;
 }
 a:hover{
  color: #440953;
 }
p{
  font-size: x-small;
}  
.form-floating>.form-control, .form-floating>.form-select {
    height: calc(2.5rem + 0px);
}
.form-floating>label {
    padding: 0.6rem 0.75rem;
}
.form-floating>.form-control {
     padding: 0;
} 
</style>