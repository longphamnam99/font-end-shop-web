<template>
    <section class="outstanding m-3 p-3">
        <div class="container">
            <div class="row">
                <div class="col-xl-12 col-12">
                    <div class="row outstanding-intro">
                        <div class="col-xl-12 title-slogan">
                            <h1 class="slogan">
                                TOP GIAO DIỆN WEBSITE NỔI BẬT {{ siteName }}
                            </h1>
                            <p class="mb-0">
                                <strong>Thiết kế website </strong> tại LosaVina không những giúp cho hoạt động kinh doanh
                                hiệu
                                quả, đáp ứng tốt các tiêu chí SEO google mà tại đây bạn có thể lựa chọn được những giao diện
                                ấn tượng, thu hút, phù hợp với đặc điểm ngành nghề kinh doanh của bạn với chi phí tốt nhất.
                                <br> Dưới đây, tổng hợp các mẫu template đẹp mắt, hiện đại, cập nhật các xu hướng thiết kế
                                mới nhất hiện nay.
                            </p>
                        </div>
                    </div>
                    <div class="row outstanding-item">
                        <div class="col-xl-4 oustanding-box" v-for="item in items" :key="item.id">
                            <div class="card theme-item">
                                <figure class="figure">
                                    <img :src="item.image">
                                    <figcaption class="figure-caption">
                                        <p>
                                            <span class="btn btn-cap" @click="trial">Dùng thử</span>
                                        </p>
                                        <p>
                                            <router-link :to="item.demo" class="btn btn-demo">Xem thực tế</router-link>
                                        </p>
                                    </figcaption>
                                </figure>
                                <div class="card-body">
                                    <div class="card-title"> <a href="/view-demo/furniture03">{{ item.name }}</a></div>
                                    <p class="card-text"> {{ item.price }} </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <ButtonLSV title="Xem thêm" class="justify-content-center" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Product from "@/assets/images/oustanding/thiet-ke-web-xay-dung-0.jpg";
import ButtonLSV from "@/components/button_lsv";
export default {
    components: {
        ButtonLSV,
    },
    data: () => {
        return {
            productImage: Product,
            siteName: process.env.VUE_SITE_NAME,
            items: [
                {
                    id: 1,
                    image: Product,
                    name: "Xây dựng 01",
                    price: "Miễn phí",
                    demo: "/demo/web-demo.html",
                },
                {
                    id: 2,
                    image: Product,
                    name: "Nha khoa 01",
                    price: "Miễn phí",
                    demo: "/demo/web-demo.html",
                },
                {
                    id: 3,
                    image: Product,
                    name: "Nội thất 01",
                    price: "Miễn phí",
                    demo: "/demo/web-demo.html",
                },
                {
                    id: 4,
                    image: Product,
                    name: "Xây dựng 01",
                    price: "Miễn phí",
                    demo: "/demo/web-demo.html",
                },
                {
                    id: 5,
                    image: Product,
                    name: "Nha khoa 01",
                    price: "Miễn phí",
                    demo: "/demo/web-demo.html",
                },
                {
                    id: 6,
                    image: Product,
                    name: "Nội thất 01",
                    price: "Miễn phí",
                    demo: "/demo/web-demo.html",
                },
            ],
        }
    },
    methods: {
        trial: () => {
            alert("trial");
        }
    },
}
</script>

<style lang="scss" scoped>
.outstanding {
    .outstanding-intro {
        @extend .intro;
    }

    .outstanding-item {
        padding: 0 15px;

        .card {
            border-radius: 10px;
            overflow: hidden;
            border: 0;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .16);
        }

        .theme-item {
            border-radius: 10px;
            overflow: hidden;
            border: 0;
            box-shadow: 0 3px 6px 0 rgba(0, 0, 0, .16);
            margin-bottom: 30px;

            &:hover {
                figure {
                    &:before {
                        opacity: .58;
                    }

                    .figure-caption {
                        opacity: 1;
                    }
                }

            }

            .figure {
                display: inline-block;
            }

            figure {
                // position: relative;
                overflow: hidden;
                height: 100%;
                margin: 0 0 1rem;

                &:before {
                    opacity: .58;
                }

                img {
                    transform: perspective(1000px) translate3d(0, 0, 21px);
                    opacity: 1;
                    -webkit-transition: -webkit-transform 0.35s;
                    transition: transform 0.35s;
                    -webkit-transform: perspective(1000px) translate3d(0, 0, 0);
                    transform: perspective(1000px) translate3d(0, 0, 0);
                    height: 100%;
                    width: 100%;
                    object-fit: contain;
                    object-position: top;
                }

                .figure-caption {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    z-index: 1;
                    opacity: 0;
                    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
                    transition: opacity 0.35s, transform 0.35s;
                    -webkit-transform: translate3d(-50%, -50%, 0);
                    transform: translate3d(-50%, -50%, 0);
                    -webkit-transform-origin: 50%;
                    transform-origin: 50%;

                    .btn-cap-default {
                        font-family: "Roboto";
                        text-decoration: none;
                        text-align: center;
                        width: 120px;
                        height: 38px;
                        text-align: center;
                        line-height: 38px;
                        padding: 0;
                        font-weight: 500;
                        font-size: $font-size;
                        text-transform: uppercase;
                    }

                    .btn-cap {
                        @extend .btn-cap-default;
                        border: none;
                        color: #fff;
                        background: linear-gradient(90deg, #6bd490 0%, #3bd16b 49%, #5eba4d 100%);

                        &:hover {
                            background: $background;
                            transition: background-image 0.3s ease;
                        }
                    }

                    .btn-demo {
                        @extend .btn-cap-default;
                        border: 2px solid #fff;
                        color: #fff;

                        &:hover {
                            background: #fff;
                            color: #000;
                        }
                    }
                }

                &:before {
                    opacity: 0;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 1;
                    width: 100%;
                    height: 100%;
                    background: #000;
                    content: '';
                    -webkit-transition: opacity 0.35s;
                    transition: opacity 0.35s;
                }
            }

            .card-body {
                .card-title {
                    font-size: 18px;
                    font-weight: 700;
                    margin: 0;

                    a {
                        text-decoration: none;
                        color: #fff;
                    }
                }

                p {
                    font-size: 14px;
                    font-weight: 300;
                    color: #fff;
                }

                padding: 0.875em;
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: center;
                background-color: RGB(111 197 236 / 49%);
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }
        }
    }
}
</style>
