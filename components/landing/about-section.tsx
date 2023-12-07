import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FunctionComponent, useState } from "react";
import PhotoAlbum, { Photo, RenderPhotoProps } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import MiniHeader from "../common/mini-header";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import "yet-another-react-lightbox/styles.css";

interface AboutSectionProps {
  id: string;
}

function NextJsImage({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}: RenderPhotoProps) {
  return (
    <Box sx={wrapperStyle}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          boxSizing: "border-box",
          border: "1px solid black",
          transition: "200ms ease-in",
          filter: "grayscale(100%)",
          "&:hover": { filter: "grayscale(0%)" },
        }}
      >
        <Image
          fill
          src={src}
          alt={alt}
          title={title}
          sizes={sizes}
          className={className}
          onClick={onClick}
        />
      </Box>
    </Box>
  );
}

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const AboutSection: FunctionComponent<AboutSectionProps> = ({ id }) => {
  const [index, setIndex] = useState(-1);
  const { t } = useTranslation("landing");

  const getImg = (id: number) =>
    `/assets/images/campaigns/campaign (${id}).jpg`;
  const originalPhotos: Photo[] = [
    {
      src: getImg(1),
      alt: "campaña",
      width: 1544,
      height: 1264,
    },
    {
      src: getImg(2),
      alt: "campaña",
      width: 1600,
      height: 1201,
    },
    {
      src: getImg(3),
      alt: "campaña",
      width: 1600,
      height: 899,
    },
    {
      src: getImg(4),
      alt: "campaña",
      width: 1599,
      height: 777,
    },
    {
      src: getImg(5),
      alt: "campaña",
      width: 1280,
      height: 576,
    },
    {
      src: getImg(6),
      alt: "campaña",
      width: 1280,
      height: 576,
    },
    {
      src: getImg(7),
      alt: "campaña",
      width: 1280,
      height: 960,
    },
    {
      src: getImg(8),
      alt: "campaña",
      width: 2048,
      height: 1536,
    },
    {
      src: getImg(9),
      alt: "campaña",
      width: 1200,
      height: 900,
    },
    {
      src: getImg(10),
      alt: "campaña",
      width: 1280,
      height: 960,
    },
  ];

  const photos = originalPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
      src: photo.src,
      width,
      height,
      images: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          src: photo.src,
          width: breakpoint,
          height,
        };
      }),
    };
  });

  const slides = photos.map(({ src, width, height, images }) => ({
    src,
    width,
    height,
    srcSet: images.map((image) => ({
      src: image.src,
      width: image.width,
      height: image.height,
    })),
  }));

  return (
    <Stack id={id}>
      <Stack mb={6}>
        <MiniHeader text={t(`about.mini-header`)} />

        <Typography variant="h4" fontWeight="700" maxWidth="40ch">
          {t(`about.title`)}
        </Typography>
      </Stack>

      <Stack overflow="auto">
        <PhotoAlbum
          layout="rows"
          photos={photos}
          targetRowHeight={150}
          spacing={0}
          renderPhoto={NextJsImage}
          onClick={({ index }) => setIndex(index)}
        />

        <Lightbox
          slides={slides}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Fullscreen, Slideshow]}
        />
      </Stack>
    </Stack>
  );
};

export default AboutSection;
