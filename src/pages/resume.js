import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Resume = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                padding: '20px',
                boxSizing: 'border-box',
            }}
        >
            <Link
                to="/"
                style={{
                    textDecoration: 'none',
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    fontWeight: 'bold',
                    color: 'black',
                    backgroundColor: 'white',
                    borderRadius: '10%',
                    padding: '10px',
                }}
            >
                Home
            </Link>
            <div
                style={{
                    width: '100%',
                    height: 'calc(100vh - 60px)', // Subtracting the space for the Home link and padding
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    overflow: 'auto',
                }}
            >
                <StaticImage
                    src="../images/resume-image.jpg"
                    alt="My Resume"
                    placeholder="blurred"
                    layout="constrained"
                    aspectRatio={800 / 1035}
                    style={{
                        width: 'auto',
                        height: '100%',
                        maxWidth: '800px',
                        maxHeight: '1035px',
                    }}
                    imgStyle={{
                        objectFit: 'contain',
                    }}
                />
            </div>
        </div>
    );
};

export default Resume;
