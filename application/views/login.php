<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta name="description" content="iExcuse">
	<meta name="author" content="solutionportal">
	<!-- <base href="/"> -->

	<title>iExcuse</title>
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,500" rel="stylesheet">
	<link rel="stylesheet" href="/public/dist/main.css" />
</head>
<body>
	<div ng-cloak ng-app="app" class="app" ng-strict-di
		id="degree-app" layout="row" ng-class="{'body-full': bodyFull}"
		custom-page ng-controller="AppCtrl">

		<!-- sidenav -->
		<!-- <md-sidenav class="md-sidenav-left"
			md-component-id="sidenav-left"
			md-is-locked-open="$mdMedia('min-width: 960px')"

			ng-include=" '/public/views/partials/sidenav.html' ">

		</md-sidenav> -->

		<div class="content-wrapper" flex layout>
			<!-- header -->
			<!-- <header class="site-head" ng-include=" '/public/views/partials/header.html' ">

			</header> -->

			<div class="main-content" layout-padding >

				<div class="page page-signin" layout-gt-xs="row" layout-align="center center">
				    <md-card flex-gt-sm="35" flex-sm="50" layout-padding layout-margin>
				        <md-card-header>
				            <md-card-header-text>
				                <span class="md-headline text-uppercase text-bolder"><span style="color:rgb(252,177,52);">i</span>Excuse</span>
				                <span class="md-subhead">Sign in to Dashboard</span>
				            </md-card-header-text>
				        </md-card-header>


				        <md-card-content>
				        	<?php echo form_open('welcome'); ?>
				        

				            <form name="loginForm">
				                <md-input-container class="md-block">
				                    <label>Email Address</label>
				                    <input type="email" ng-model="login.email" name="email" placeholder="example@xyz.com" required ng-pattern="/^.+@.+\..+$/"/>

				                </md-input-container>

				                <md-input-container class="md-block">
				                    <label>Password</label>
				                    <input type="password"  ng-model="login.pass" name="password" placeholder="........" required ng-minlength="6" style="margin-bottom: 2px"/>
				                    <!-- <div class="md-caption" style="text-align: right;"><a href="#/pages/forget-pass">Forget Password?</a></div> -->
				                </md-input-container>

				                <?php
						            echo "<div class='error_msg' style='color:red; text-align:center;'>";
						            if (isset($error_message)) {
						                echo $error_message;
						            }
						            echo validation_errors();
						            echo "</div>";
						        ?>

				                <div layout layout-align="end center">
				                    <md-button class="md-raised md-primary" flex type="submit" >Sign In</md-button>
				                </div>


				            </form>
				        </md-card-content>

				        <md-footer class="text-center">
				            <!-- <div class="md-caption">Don't have an account?&nbsp;<a href="#/pages/register">Create One</a></div> -->
				        </md-footer>

				    </md-card>

				</div>

			</div>
		</div>

		<!-- hidden search container -->
		<!-- <div class="search-container" ng-show="isSearchOpen">
			<md-icon class="ion-ios-close-circle-outline" ng-click="closeSearch()"></md-icon>
			<input type="search" class="search-input" placeholder="Type to search..." />
		</div> -->



	</div>


	<!-- libs.js, common.js -->
	<script src="/public/dist/libs.js"></script>
    <script src="/public/dist/main.js"></script>
</body>
</html>
