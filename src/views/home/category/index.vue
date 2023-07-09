<template>
    <section class="category m-3 p-3">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-12">
                    <div class="row category-intro">
                        <div class="col-xl-12 title-slogan">
                            <h1 class="slogan">
                                DỊCH VỤ THIẾT KẾ WEBSITE TẠI – LosaVina
                            </h1>
                            <p class="mb-0"> LosanVina <strong>Công ty thiết kế website chuyên nghiệp,</strong> trọn gói,
                                chuẩn
                                SEO giúp khách hàng bán hàng Online được hiệu quả. Chúng tôi mang đến giải pháp thiết kế
                                website cho tất cả các lĩnh vực, ngành nghề kinh doanh của bạn.</p>
                        </div>
                    </div>
                    <div class="row category-item">
                        <div class="col-xl-3 col-6 mb-3" v-for="item in items" :key="item.id">
                            <router-link to="/" class="item-design">
                                <div class="item-image">
                                    <img :src="item.category_image" :alt="item.category_image">
                                </div>
                                <div class="item-content">
                                    <h3 class="item-name">
                                        {{ item.category_name }}
                                    </h3>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="row category-trial text-center">
                        <ButtonLSV title="ĐĂNG KÝ DÙNG THỬ" class="justify-content-center">
                            <svg class="shake-pendulum mb-2" id="paintbucket" xmlns="http://www.w3.org/2000/svg"
                                width="31.751" height="31.751" viewBox="0 0 31.751 31.751">
                                <path id="Vector"
                                    d="M23.956,7.238,19.3,2.582c-4.181-4.167-6.377-2.633-9.023,0L2.789,10.07C1.268,11.591.434,12.57.13,13.655a.013.013,0,0,1-.013.013v.066c-.542,1.932.886,3.572,2.672,5.358l4.67,4.644c1.667,1.68,3.016,2.725,4.511,2.725s2.778-1.005,4.5-2.725l7.488-7.475a15.037,15.037,0,0,0,1.495-1.72v-.013h.013C27.158,12.16,26.708,9.977,23.956,7.238ZM22.594,12.4H22.58c-.4-.093-.807-.172-1.217-.251-.026,0-.053-.013-.093-.013q-1.389-.258-2.818-.437H18.4c-.953-.119-1.918-.212-2.884-.265H15.41c-.847-.053-1.707-.079-2.553-.079-1.032,0-2.064.053-3.082.119l-.489.04c-.767.053-1.535.132-2.289.225-.212.026-.41.053-.609.079-.767.119-1.521.238-2.275.384-.172.04-.331.066-.5.093l-.212.04c.238-.265.516-.542.82-.847L11.692,4.01c2.408-2.381,3.228-2.95,6.191,0l4.644,4.657a8.567,8.567,0,0,1,1.482,1.812.013.013,0,0,0,.013.013A1.315,1.315,0,0,1,22.594,12.4Z"
                                    transform="translate(1.325 2.644)" fill="#fff"></path>
                                <path id="Vector-2" data-name="Vector"
                                    d="M5.22,1.151A2.288,2.288,0,0,0,3.3,0,2.248,2.248,0,0,0,1.4,1.151,5.475,5.475,0,0,0,.034,5.265,3.129,3.129,0,0,0,3.3,7.938,3.129,3.129,0,0,0,6.57,5.252,5.432,5.432,0,0,0,5.22,1.151Z"
                                    transform="translate(22.496 21.167)" fill="#fff"></path>
                                <path id="Vector-3" data-name="Vector" d="M0,0H31.751V31.751H0Z" fill="none" opacity="0">
                                </path>
                            </svg>
                        </ButtonLSV>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import WebBanner from "@/assets/images/category_product/Web-thoi-trang.svg";
import ButtonLSV from "@/components/button_lsv";
export default {
    components: {
        ButtonLSV,
    },
    data() {
        return {
            WebBanner: WebBanner,
            items: [
                {
                    id: 1,
                    category_name: "Web thiết kế trọn gói",
                    category_image: WebBanner,
                },
                {
                    id: 2,
                    category_name: "Web Doanh Nghiệp",
                    category_image: WebBanner,
                },
                {
                    id: 3,
                    category_name: "Web Tin Tức",
                    category_image: WebBanner,
                },
                {
                    id: 4,
                    category_name: "Web Bán Hàng",
                    category_image: WebBanner,
                },
                {
                    id: 5,
                    category_name: "Web Thời Trang",
                    category_image: WebBanner,
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.category {
    .row.category-item {
        >div {
            flex: 0 0 20%;
            max-width: 20%;
        }
    }

    .category-intro {
        @extend .intro;
    }

    .category-item {
        @media (min-width: 1200px) {
            .row {
                div {
                    max-width: 20%;
                }
            }
        }

        .item-design {
            text-decoration: none;
            color: black;
            margin-bottom: 20px;

            .item-image {
                display: table;
                margin: 0 auto;
                border-radius: 20px;
                overflow: hidden;
                margin-bottom: 10px;

                img {
                    width: 150px;
                    height: 150px;
                    transition: 1.1s;
                    object-fit: contain;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            .item-content {
                .item-name {
                    font-size: $font-size;
                    text-align: center;
                }
            }

            &:hover {
                color: $background;
            }
        }
    }

    .category-trial {
        margin: 20px 0;
        display: flex;
        justify-content: center;

        .shake-pendulum {
            -webkit-animation: shake-pendulum 2.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
            animation: shake-pendulum 2.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite both;
        }

        @keyframes shake-pendulum {

            0%,
            100% {
                -webkit-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transform-origin: 50% 50%;
                transform-origin: 50% 50%
            }

            10% {
                -webkit-transform: rotate(8deg);
                transform: rotate(8deg)
            }

            20%,
            40%,
            60% {
                -webkit-transform: rotate(-10deg);
                transform: rotate(-10deg)
            }

            30%,
            50%,
            70% {
                -webkit-transform: rotate(10deg);
                transform: rotate(10deg)
            }

            80% {
                -webkit-transform: rotate(-8deg);
                transform: rotate(-8deg)
            }

            90% {
                -webkit-transform: rotate(8deg);
                transform: rotate(8deg)
            }
        }

        svg {
            position: relative;
            top: 5px;
        }
    }
}
</style>