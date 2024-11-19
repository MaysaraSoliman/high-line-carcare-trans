"use client";

import { Col, Image, Row } from "antd";
import React from "react";
import { StyledGalleryComponent } from "./GalleryComponent.styled";

interface GalleryComponentProps {
  images: string[];
}

const GalleryComponent: React.FC<GalleryComponentProps> = ({ images }) => {
  return (
    <StyledGalleryComponent style={{ padding: "20px" }}>
      <Row gutter={[16, 16]}>
        <Image.PreviewGroup>
          {images.map((src, index) => (
            <Col key={index} xs={24} sm={12} md={6}>
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            </Col>
          ))}
        </Image.PreviewGroup>
      </Row>
    </StyledGalleryComponent>
  );
};

export default GalleryComponent;

// import { Col, Image, Row } from "antd";
// import React from "react";
// import { StyledGalleryComponent } from "./GalleryComponent.styled";

// const images = [
//   "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
//   "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
//   "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
//   "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
//   "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
//   "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
//   "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
//   "/assets/images/hero-section/car-body-polishing-process-at-the-detailing-workshop.jpg",
// ];

// const GalleryComponent = () => {
//   return (
//     <StyledGalleryComponent style={{ padding: "20px" }}>
//       <Row gutter={[16, 16]}>
//         {images.map((src, index) => (
//           <Col key={index} xs={24} sm={12} md={6}>
//             {/* <Image.PreviewGroup> */}
//             <Image
//               src={src}
//               alt={`Image ${index + 1}`}
//               style={{
//                 width: "100%",
//                 borderRadius: "8px",
//               }}
//             />
//             {/* </Image.PreviewGroup> */}
//           </Col>
//         ))}
//       </Row>
//     </StyledGalleryComponent>
//   );
// };

// export default GalleryComponent;
