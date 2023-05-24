import React from "react";

export default function Testimonial() {
  return (
    <section className="my-4">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-xl-8 text-center">
          <h3 class="mb-4">Testimonials</h3>
          <p class="mb-4 pb-2 mb-md-5 pb-md-0">
            Learn about the real-life experiences of our happy clients as they
            share their tales of satisfaction and outstanding service. These
            endorsements are evidence of the high caliber and value that
            <strong>Pet Star</strong> offers. Continue reading to learn how we
            have benefited those we have had the honor to serve.
          </p>
        </div>
      </div>

      <div class="row text-center">
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src="https://media.istockphoto.com/id/1313422725/photo/portrait-of-a-beautiful-authentic-latina-female-with-afro-hair-wearing-light-blue-jumper-and.jpg?s=612x612&w=0&k=20&c=OjNtJUIK9OMczJrC0vQE5bu7RGC3TUMx4Gx_PKn0OzQ="
              class="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 class="mb-3">Mary Lucia</h5>
          {/* <h6 class="text-primary mb-3">Web Developer</h6> */}
          <p class="px-xl-3">
            <i class="fas fa-quote-left pe-2"></i>I had my dog vaccinated and
            groomed here. The staff was very friendly and professional. I will
            definitely be coming back here for all my dog's needs.
          </p>
          <ul class="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star-half-alt fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src="https://media.istockphoto.com/id/1192686016/photo/portrait-of-young-happy-woman.jpg?s=612x612&w=0&k=20&c=so3OUsSTyoLdblaS2_fMB0bM0z-xMk0_PnY9WFE9RoA="
              class="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 class="mb-3">Lisa Mumbi</h5>
          {/* <h6 class="text-primary mb-3">Graphic Designer</h6> */}
          <p class="px-xl-3">
            <i class="fas fa-quote-left pe-2"></i>I will not be looking for a
            veterinary clinic anymore. I have found the best one for my pet
            animals. Thank you Pet Star!
          </p>
          <ul class="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
        <div class="col-md-4 mb-0">
          <div class="d-flex justify-content-center mb-4">
            <img
              src="https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg="
              class="rounded-circle shadow-1-strong"
              width="150"
              height="150"
            />
          </div>
          <h5 class="mb-3">John Mark</h5>
          {/* <h6 class="text-primary mb-3">Marketing Specialist</h6> */}
          <p class="px-xl-3">
            <i class="fas fa-quote-left pe-2"></i>I enjoyed my visit here. The
            staff was very friendly and professional.
          </p>
          <ul class="list-unstyled d-flex justify-content-center mb-0">
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="fas fa-star fa-sm text-warning"></i>
            </li>
            <li>
              <i class="far fa-star fa-sm text-warning"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
