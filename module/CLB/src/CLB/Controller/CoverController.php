<?php

namespace CLB\Controller;

class CoverController extends \VuFind\Controller\CoverController
{
	
    /**
     * Convert image parameters into an array for use by the image loader.
     *
     * @return array
     */
    protected function getImageParams()
    {
        $params = $this->params();  // shortcut for readability
        return [
            // Legacy support for "isn" param which has been superseded by isbn:
            'isbn' => $params()->fromQuery('isbn') ?: $params()->fromQuery('isn'),
            'size' => $params()->fromQuery('size'),
            'type' => $params()->fromQuery('contenttype'),
            'title' => $params()->fromQuery('title'),
            'author' => $params()->fromQuery('author'),
            'callnumber' => $params()->fromQuery('callnumber'),
            'issn' => $params()->fromQuery('issn'),
            'oclc' => $params()->fromQuery('oclc'),
            'upc' => $params()->fromQuery('upc'),
            'recordid' => $params()->fromQuery('recordid'),
            'source' => $params()->fromQuery('source'),
            'nbn' => $params()->fromQuery('nbn'),
	    'ismn' => $params()->fromQuery('ismn'),
            'format' => $params()->fromQuery('format'),
        ];
    }

}

