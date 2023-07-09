<template>
    <section class="slideshow" v-if="slides.length > 0">
        <div id="carousel" class="carousel slide" :class="effect" data-bs-ride="carousel">
            <div class="carousel-indicators" v-if="slides.length > 0 && dot">
                <template v-for="(slide, key) in slides" :key="slide.id">
                    <button type="button" :class="{ active: slideIndex == key }" data-bs-target="#carousel"
                        :data-bs-slide-to="key" :aria-label="slide.name"></button>
                </template>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item" :class="{ active: slideIndex == key }" v-for="(slide, key) in slides"
                    :key="slide.id">
                    <div class="row">
                        <div class="col-xl-6 p-0 desc-product">
                            <div class="text text-left text-lg-right p-4 px-xl-5 d-flex align-items-center">
                                <div class="py-md-5">
                                    <h2 class="mb-4">Ladies <br> Collection</h2>
                                    <p class="h5">Call: 0123 456 78901</p>
                                    <p class="h5 mb-4">Email Address: email@info.com</p>
                                    <div class="row justify-content-end">
                                        <div class="col-xl-8">
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                                Consonantia,
                                                there live the blind texts. Separated they live in Bookmarksgrove right at
                                                the
                                                coast
                                                of
                                                the Semantics, a large language ocean.</p>
                                        </div>
                                    </div>
                                    <p>
                                        <button type="button" class="btn btn-outline-dark mb-2 py-3 px-4">Shop the
                                            collection
                                            Outline</button>
                                        <button type="button" class="btn btn-dark mb-2 py-3 px-4 ml-2 ms-2">Learn
                                            More</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 p-0">
                            <img :src="slide.image" class="d-block w-100" :alt="slide.name">
                        </div>
                    </div>
                </div>
            </div>
            <div class="carousel-control" v-if="navigation">
                <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
import Image from "@/assets/images/slider/z4396330291209_4587921427cb82075b493e66c2f316ea.jpg";
import Image2 from "@/assets/images/slider/z4396322694345_640b857bdc6c28012e0394ba2f180af7.jpg";
export default {
    name: "slideshow",
    data: () => {
        return {
            slideIndex: 0,
            effect: "carousel-fade",
            navigation: true,
            dot: true,
            slides: [
                {
                    id: 1,
                    name: "Slide 1",
                    image: Image,
                },
                {
                    id: 2,
                    name: "Slide 2",
                    image: Image2,
                },
                {
                    id: 3,
                    name: "Slide 2",
                    image: Image,
                }
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
@mixin control($name) {
    z-index: 100;
    top: 85%;
    width: auto;

    &:hover {
        color: $background;
        opacity: .9;
    }

    &:focus {
        color: $background;
        opacity: .9;
    }

    &:before {
        content: $name;
        font-size: 20px;
        color: $background;
        position: absolute;
        top: 0;
        font-weight: 600;
        line-height: .8;
        transition: 0.3s;
    }

}

@mixin icon($content) {
    height: 100px;
    width: 100px;
    background-size: 100%, 100%;
    border-radius: 50%;
    background-image: none;

    &:after {
        content: $content;
        font-size: 45px;
        color: $background;
    }
}

.slideshow {
    .carousel-item {
        min-height: 400px;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .carousel-inner {
        .text {
            background: #c0ffce;
            height: 100%;

            h2 {
                font-size: 60px;
                font-weight: 800;
                text-transform: uppercase;
            }
        }

        @media (min-width: 992px) {
            .text-lg-right {
                text-align: right !important;
            }
        }

        img {
            width: 100%;
            height: 650px;
            image-rendering: pixelated;
            object-fit: cover;
        }
    }

    .carousel-indicators {
        flex-direction: column;
        margin-left: 5%;
        top: 0;
        width: 10%;
        padding: 0;

        button {
            background: #fff;
            width: 16px;
            height: 16px;
            margin: 5px;
            border-radius: 50%;
            margin-top: 2%;
            border: 2px solid $background;
        }

        .active {
            background-color: $background;
        }
    }

    .carousel-control {
        .carousel-control-prev {
            left: 40%;
            @include control("Lùi");

            .carousel-control-prev-icon {
                width: 4rem;
                @include icon("<");
            }
        }

        .carousel-control-next {
            right: 40%;
            @include control("Tiếp");

            .carousel-control-next-icon {
                width: 4rem;
                @include icon(">");
            }
        }
    }
}

// response


// Dành cho điện thoại nhỏ (portrait)
@media (max-width: 575px) {
    .slideshow {
        .carousel-indicators {
            display: none;
        }

        .desc-product {
            display: none;
        }

        .carousel-control {
            .carousel-control-prev {
                top: 0;
                left: 0;

                &:before {
                    display: none;
                }

                .carousel-control-prev-icon {
                    background: #fff;
                    display: flex;
                    align-content: center;
                    justify-content: center;
                    align-items: center;

                    &:after {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                }
            }

            .carousel-control-next {
                top: 0;
                right: 0;

                &:before {
                    display: none;
                }

                .carousel-control-next-icon {
                    background: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    &:after {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                }
            }
        }
    }
}

// // Điện thoại di động nhỏ (landscape)
// @media (min-width: 576px) and (max-width: 767px) {}

// // Điện thoại di động trung bình và Tablet nhỏ
// @media (min-width: 768px) and (max-width: 991px) {}

// // Điện thoại di động lớn và Tablet lớn
// @media (min-width: 992px) and (max-width: 1199px) {}
</style>