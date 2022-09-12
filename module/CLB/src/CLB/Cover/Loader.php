<?php

namespace CLB\Cover;

class Loader extends \VuFind\Cover\Loader
{
	
    /**
     * Load an image given an ISBN and/or content type.
     *
     * @param array $settings Array of settings used to calculate a cover; may
     * contain any or all of these keys: 'isbn' (ISBN), 'size' (requested size),
     * 'type' (content type), 'title' (title of book, for dynamic covers), 'author'
     * (author of book, for dynamic covers), 'callnumber' (unique ID, for dynamic
     * covers), 'issn' (ISSN), 'oclc' (OCLC number), 'upc' (UPC number),
     * 'nbn' (national bibliography number), 'ismn' (ISMN), 'uuid' (Universally
     *  unique identifier).
     *
     * @return void
     */
    public function loadImage($settings = [])
    {
        // reset to normal
        $this->hasLoadedUnavailable = false;
        // Load settings from legacy function parameters if they are not passed
        // in as an array:
        $settings = is_array($settings)
            ? $settings
            : $this->getImageSettingsFromLegacyArgs(func_get_args());

        // Store sanitized versions of some parameters for future reference:
        $this->storeSanitizedSettings($settings);

        // Display a fail image unless our parameters pass inspection and we
        // are able to display an ISBN or content-type-based image.
        if (!in_array($this->size, $this->validSizes)) {
            $this->loadUnavailable();
        } elseif (!$this->fetchFromAPI()
            && !$this->fetchFromContentType()
        ) {
            if ($this->generator) {
                $this->generator->setOptions($this->getCoverGeneratorSettings());
                $this->image = $this->generator->generate(
                    $settings['title'],
                    $settings['author'],
                    $settings['callnumber']
                );
		$this->contentType = 'image/png';
	    // cover depends on format
	    }elseif (isset($settings['format']) && $settings['format']){
		$this->contentType = 'image/svg+xml';
		    switch ($settings['format'][0]) {
			    case "Article":
				    $icon_name = "IKONA-clanek.svg";
				    break;
			    case "Book":
				    $icon_name = "IKONA-kniha.svg";
				    break;
			    case "Journal":
				    $icon_name = "IKONA-casopis.svg";
				    break;
			    case "Book Chapter":
				    $icon_name = "IKONA-kniha-cast.svg";
				    break;
			    case "Audio":
				    $icon_name = "IKONA-audio.svg";
				    break;
			    case "Video":
				    $icon_name = "IKONA-video.svg";
				    break;
			    default:
				$this->contentType = 'image/png';
				$icon_name = "../noCover3.png";

		    }
		    $this->image = file_get_contents(getenv('VUFIND_LOCAL_DIR').'/../themes/CLB/images/icons/'.$icon_name);
		    return $this->image;
	    }else {
                $this->loadUnavailable();
            }
        }
    }
}

