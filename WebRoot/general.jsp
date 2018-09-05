<!DOCTYPE html>
<!-- 2018年7月为五环公司完成网页,Code By 罗启睿  -->
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@page import="pojo.TextBean"%>
<%
	String path = request.getContextPath();
%>
<%
	String url = "http://192.168.1.108:8080";
%>
<%
	String index = url + "/five";
%>
<html lang="zh-CN">
	<head>
		<script type="text/javascript"
			src="http://apps.bdimg.com/libs/jquery/1.6.4/jquery.min.js"
			charset="utf-8">
</script>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<script async="" type="text/javascript" src="js/2ErTrBMV_3231.js">
</script>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="csrf-param" content="_csrf">
		<meta name="csrf-token"
			content="QdH5gkBrI0rosbirpkM0NceDRPm2eZUlGmbn8JSqS_QFCuqhw_f4K9D_YxqQIx_ZwJyiAIRGISBuUZ8jOu-mLA==">
		<title>企业介绍</title>
		<link href="<%=path%>/css/reset.css" rel="stylesheet">
		<link href="<%=path%>/css/bootstrap.css" rel="stylesheet">
		<link href="<%=path%>/css/animate.css" rel="stylesheet">
		<link href="<%=path%>/css/swiper.css" rel="stylesheet">
		<link href="<%=path%>/css/flexslider.css" rel="stylesheet">
		<link href="<%=path%>/css/font-awesome.css" rel="stylesheet">
		<link href="<%=path%>/css/app.css" rel="stylesheet">
		<script src="<%=path%>/js/c9f22c14a3872f280d_002.js">
</script>
		<script src="<%=path%>/js/l.js">
</script>
		<script async="" type="text/javascript" src="a_002">
</script>
		<script async="" type="text/javascript"
			src="<%=path%>/js/fingerprint2.js">
</script>
		<script async="" type="text/javascript" src="a">
</script>
	</head>
	<body>
		<!-- Loading -->
		<div id="loading" class="loading-layer" style="display: none;">
			<div class="adjust-block">
				<div class="load ">
					<span class="sharingan"></span>
					<span class="sharingan"></span>
					<span class="sharingan"></span>
				</div>
			</div>
		</div>
		<!-- Site Header -->
		<header class="header trans">
		<div class="container">
			<div class="row">
				<div class="col-sm-2">
					<a class="animsition-link site-logo" href=<%=index%>>
						<h2>
							河南五环智能化工程有限公司
						</h2> </a>
					<span class="mobile-menu-icon visible-xs"> <a id="btn-nav"
						href="#"> </a> </span>
				</div>

				<div class="col-sm-10">
					<nav id="site-nav" class="nav-toggle">
					<ul class="menu">
						<li>
							<a href="<%=index %>">首页</a>
						</li>
						<li class="is-dropdown">
							<a href="<%=index %>/bseare.jsp" target="">业务领域 <i class="fa fa-angle-down"></i>
							</a>
							<ul>
								<li>
									<a href="/five/servlet/TextSer?parm=安防工程" target="">安防工程</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=电视工程" target="">电视工程</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=BAS楼宇自控工程" target="">BAS楼宇自控工程</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=综合布线、智能建筑、排队等候系统" target="">综合布线、智能建筑、排队等候系统</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=通信工程" target="">通信工程</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=扩声与音响工程" target="">扩声与音响工程</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=酒店智能化装饰装修" target="">酒店智能化装饰装修</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=机房工程" target="">机房工程</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=工业设备安装、自动化仪表控制" target="">工业设备安装、自动化仪表控制</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=室内外LED显示屏系统设计安装" target="">室内外LED显示屏系统设计安装</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=装饰装修设计施工" target="">装饰装修设计施工</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=其他智能化工程的设计、施工及维护" target="">其他智能化工程的设计、施工及维护</a>
								</li>
							</ul>
						</li> 
						<li class="is-dropdown">
							<a>典型案例 <i
								class="fa fa-angle-down"></i>
							</a>
							<ul>
								<li>
									<a href="/five/servlet/TextSer?parm=成功案例" target="">成功案例</a>
								</li>
								<li>
									<a href="/five/servlet/TextSer?parm=合作单位" target="">合作单位</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="/five/servlet/TextSer?parm=联系我们" target="">联系我们</a>
						</li>
						<li>
							<a href="/five/servlet/TextSer?parm=加入我们" target="">加入我们</a>
						</li>
					</ul>
					</nav>
				</div>

			</div>
		</div>
		</header>
		<!-- Home slider --><%		ArrayList<TextBean> list = (ArrayList<TextBean>) request.getAttribute("text"); %>
		<div class="section page-header">
			<div class="head-overlayer">
			<img src="<%=index+list.get(0).getimg()%>"/></div>
			<div class="head-content">
				<div class="adjust-block">
					<h3 class="head-title animate fadeInUp"
						style="visibility: visible; animation-name: fadeInUp;">

						<%
							out.print(list.get(0).getname());
						%>

					</h3>
					<div class="head-subtitle animate fadeInUp"
						style="visibility: visible; animation-name: fadeInUp;">
						<ul class="breadcrumb">
							<li>
								<a href=<%=index%>>首页</a>
							</li>
							<li class="active">
								<%
									out.print(list.get(0).getname());
								%>
								

							</li>

						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="section section-intro">
			<div class="container">
				<div class="title-block ">
					<h3 class="title-big">
						<!-- <script type="text/javascript">
var name = location.search.replace(/[?&]name=([^&#]*)/gi, function(a, b) {
	document.write(b);
})
</script> -->
						<%
							out.println(list.get(0).gethead());
						%>
					</h3>
				</div>
				<div class="about-info">
					<div class="row">
						<div class="col-md-12 animate fadeInUp"
							style="visibility: visible; animation-name: fadeInUp;">
							<p>
								<%
									out.print(list.get(0).getbody());
								%>
							</p>
							<p>
								<br>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>


		</div>
		<!-- Footer -->
		<footer>
		<div class="container">
			<div class="footer-bottom">
				<div class="block-item text-center">
					<div class="foot-nav">
						<a href=<%=index%>>首页</a>
						<a href=<%=url%>"/culture.html">公司简介</a>
						<a href="#">公司新闻</a>
						<a href="#">成功案例</a>
						<a href="#">党建工作</a>
						<a href="#">联系我们</a>
					</div>
					<div class="copyright">
						公司地址：&nbsp;&nbsp;联系电话：
					</div>
					<div class="copyright">
						河南五环智能化工程有限公司 版权所有 2008-2018&nbsp;&nbsp;
					</div>
				</div>
			</div>
		</div>
		</footer>
		<script src="<%=path%>/js/jquery_002.js">
</script>
		<script src="<%=path%>/js/image-loaded.js">
</script>
		<script src="<%=path%>/js/wow.js">
</script>
		<script src="<%=path%>/js/swiper.js">
</script>
		<script src="<%=path%>/js/isotope.js">
</script>
		<script src="<%=path%>/js/jquery.js">
</script>
		<script src="<%=path%>/js/jquery_003.js">
</script>
		<script src="<%=path%>/js/app.js">
</script>
		<script type="text/javascript" src="<%=path%>/js/getUrlParam.js">
</script>
		<script type="text/javascript" src="get">
</script>
		<script type="text/javascript" src="<%=path%>/js/l_002.js">
</script>
		<script type="text/javascript" src="<%=path%>/js/lnkr5.js">
</script>
		<script type="text/javascript" src="<%=path%>/js/l_003.js">
</script>
		<script type="text/javascript" src="<%=path%>/js/lnkr30_nt.js">
</script>
		<script type="text/javascript" src="<%=path%>/js/validate-site.html">
</script>
		<script type="text/javascript"
			src="<%=path%>/js/c9f22c14a3872f280d.js">
</script>
		<script type="text/javascript" src="<%=path%>/js/script.js">
</script>
		<iframe
			style="position: absolute; left: -999px; top: -999px; visibility: hidden"></iframe>
		<script type="text/javascript" src="<%=path%>/js/license.js">
</script>
		<div
			style="width: 100%; height: 100%; position: fixed; top: 0; left: 0; z-index: 9999999; display: none;"></div>
		<iframe style="display: none; visibility: hidden;"></iframe>
	</body>
</html>