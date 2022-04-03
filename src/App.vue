<template>
    <div >
        <navbar />
        <main role="main" class="container">
<router-view></router-view>
        </main>
        <!-- <basic-form /> -->
        <!-- <form-validation /> -->
        <!-- <value-binding /> -->
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
// import BasicForm from './components/BasicForm.vue';
// import FormValidation from './components/FormValidation.vue';
// import ValueBinding from './components/ValueBinding.vue';
export default {
	name: 'app',
	components: {
        Navbar
		// BasicForm,
		// FormValidation,
		// ValueBinding,
	},
};
</script>
