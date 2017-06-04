//考虑了半天没有想出简单的方法将按钮和form表单绑定在一起，实现不同按钮切换不同form
//最后使用了繁琐的办法，用两个函数分别控制一个按钮，缺点很明显，若是按钮数增多，函数也会增多
//思维拓展：使用路由转发是否会更优雅一点，在这里只有两个页面需要切换，若是多个页面的话
//选择路由转发肯定更好一点（但是我不会！！！）

var app = angular.module("loginModel",[]);
			app.controller("ctrl",["$scope",function($scope){
				$scope.data = "baidu";
				$scope.btnFlag = 1; 
				$scope.btnLogin = "登陆";
				$scope.btnRegister = "注册";
				//点击登陆按钮，修改btnflag，通过ng-if判断是否显示
				$scope.btnFlagJud1 = function(){
					$scope.btnFlag = 1;
				};
				//点击登陆按钮，修改btnflag，通过ng-if判断是否显示
				$scope.btnFlagJud2 = function(){
					$scope.btnFlag = 2;
				};
				// 点击按钮改变样式
				$(".choseBtn1").click(function(){
//					$(".choseBtn2").attr("class","btn btn-lg btn-info");
					$(".choseBtn2").removeClass("btn-primary").addClass("btn-info");	
					$(".choseBtn1").removeClass("btn-info").addClass("btn-primary");
					
				});
				$(".choseBtn2").click(function(){
//					$(".choseBtn1").attr("class","btn btn-lg btn-info");
					$(".choseBtn1").removeClass("btn-primary").addClass("btn-info");
					$(".choseBtn2").removeClass("btn-info").addClass("btn-primary");
					
				});
				// 注册页面中：username获取焦点事件
				$scope.registerFocus = function(){
					$scope.registerUsernameMessage = "用户名长度2-10之间";
					$scope.usernameRequiredFflag = false;
					$("#inputNewUserName").parent().removeClass("input-group");
				};
				// 注册页面中：username失去焦点事件
				$scope.registerBlur = function(){
					$scope.registerUsernameMessage = "";
					$scope.usernameRequiredFflag = true;
					
					
				};
				
// 由于想在input输入框验证正确后添加一个打勾的图标，因此需要添加一个父标签<div>,在其中添加class='input-group'属性
// 但是会出现输入框变短的BUG（无语。。。），因此我选择使用jquery，在完成验证后再添加一个父级标签
//已解决：使用has-feedback和form-control-feedback属性解决
			}]);
			
			