<template>
	<header id="header" class="header">
		<div class="main-header d-flex align-items-center flex-wrap" :class="{ fixed: fixedMenu }">
			<div class="container">
				<div class="row">
					<div class="col-xl-2 col-8 d-flex align-items-center ">
						<router-link to="/" class="main-logo" id="logo">
							my logo
						</router-link>
					</div>
					<nav class="col-xl-10 col-4 d-flex justify-content-end">
						<ul class="main-menu d-none d-xl-flex align-items-center menu">
							<li class="has-child">
								<router-link to="/">
									Website
									<fa :icon="['fas', 'angle-down']" />
								</router-link>
								<ul class="child-menu dropdown">
									<li>
										<router-link to="/">Home</router-link>
									</li>
								</ul>
							</li>
							<li>
								<router-link to="/">Bảng giá</router-link>
							</li>
							<li>
								<router-link to="/">Blog</router-link>
							</li>
							<li>
								<router-link to="/">Trợ giúp</router-link>
							</li>
							<li>
								<router-link to="/">Khuyến mãi tháng</router-link>
							</li>
							<li>
								<router-link to="/">Liên hệ</router-link>
							</li>
							<li>
								<router-link class="btn-header d-flex align-items-center" to="/">Đăng
									nhập</router-link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script>

export default {
	data: () => {
		return {
			fixedMenu: false,
		}
	},
	mounted() {
		window.addEventListener("scroll", this.handleScroll);
	},
	methods: {
		handleScroll() {
			if (window.scrollY > 150) {
				this.fixedMenu = true;
			} else {
				this.fixedMenu = false;
			}
		},
	},
}
</script>

<style lang="scss" scoped>
header {
	background: $background;
}

.header {
	.fixed {
		position: fixed !important;
		top: 0;
		left: 0;
		width: 100%;
		height: auto;
		z-index: 9999;
		background: $background;
		animation: fadeInDown .1s ease;
	}

	.main-header {
		position: relative;

		.container {
			position: relative;
		}

		.main-logo {
			display: block !important;
			height: initial;

			img {
				height: 44px;
			}
		}

		ul {
			margin: 0;
			padding: 0;
			list-style: none;

			li {
				margin-left: 20px;
				position: relative;

				a {
					color: #fff;
					text-decoration: none;
					line-height: 85px;
					display: block;
					font-size: $font-size;
					font-weight: bold;
				}

				.child-menu {
					display: none;
					box-shadow: 0 0 12.22px 0.78px rgba(0, 0, 0, .11);
					background: #fff;
					position: absolute;
					left: -50px;
					top: 80%;
					z-index: 9;
					border-top: 1px solid #179eff;
					min-width: 185px;
					top: 100%;

					&:after {
						bottom: 100%;
						left: 250px;
						border: solid transparent;
						content: " ";
						height: 0;
						width: 0;
						position: absolute;
						pointer-events: none;
						border-color: rgba(23, 158, 255, 0);
						border-bottom-color: #fff;
						border-width: 9px;
					}
				}

				.child-menu.dropdown {
					width: 730px;
					left: -222px;
					height: inherit;
					flex-direction: inherit;
					flex-wrap: wrap;
					padding: 16px 25px 26px;
					transition-duration: 0s;
					transition-delay: .1s;
					opacity: 0;
					display: flex;
					visibility: hidden;
				}

				&:hover {
					>ul.dropdown {
						opacity: 1;
						visibility: visible;
					}

					a {
						color: $color-hover;
						transition: 0.2s;
					}
				}

				.btn-header {
					height: 42px;
					padding: 2px 20px;
					font-size: $font-size;
					color: #26b896;
					border: 2px solid $color-hover;
					border-radius: 45px;
					color: $color-hover;
				}
			}

			li.has-child {
				ul {
					li {
						a {
							color: #444445;
						}
					}
				}
			}
		}
	}
}

@keyframes fadeInDown {
	0% {
		opacity: 0;
		transform: translateY(-20px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}

@keyframes fadeInUp {
	0% {
		opacity: 0;
		transform: translateY(20px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>