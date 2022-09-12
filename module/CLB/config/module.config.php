<?php

return array (
  'vufind' => 
  array (
    'plugin_managers' => 
    array (
      'recordtab' => 
      array (
        'abstract_factories' => 
        array (
          0 => 'VuFind\\RecordTab\\PluginFactory',
        ),
        'invokables' => 
        array (
          'techdata' => 'CLB\\RecordTab\\TechData',
        ),
      ),
      'recorddriver' => 
      array (
        'factories' => 
        array (
          'CLB\\RecordDriver\\SolrMarc' => 'VuFind\\RecordDriver\\SolrDefaultFactory',
        ),
        'aliases' => 
        array (
          'VuFind\\RecordDriver\\SolrMarc' => 'CLB\\RecordDriver\\SolrMarc',
        ),
        'delegators' => 
        array (
          'CLB\\RecordDriver\\SolrMarc' => 
          array (
            0 => 'VuFind\\RecordDriver\\IlsAwareDelegatorFactory',
          ),
        ),
      ),
    ),
  ),
  'router' => 
  array (
    'routes' => 
    array (
      'sam' => 
      array (
        'type' => 'Laminas\\Router\\Http\\Literal',
        'options' => 
        array (
          'route' => '/SAM',
          'defaults' => 
          array (
            'controller' => 'SAM',
            'action' => NULL,
          ),
        ),
      ),
      'export' => 
      array (
        'type' => 'Laminas\\Router\\Http\\Literal',
        'options' => 
        array (
          'route' => '/export',
          'defaults' => 
          array (
            'controller' => 'export',
            'action' => NULL,
          ),
        ),
      ),
    ),
  ),
  'service_manager' => 
  array (
    'factories' => 
    array (
      'CLB\\Cover\\Loader' => 'VuFind\\Cover\\LoaderFactory',
    ),
    'aliases' => 
    array (
      'VuFind\\Cover\\Loader' => 'CLB\\Cover\\Loader',
    ),
  ),
  'controllers' => 
  array (
    'factories' => 
    array (
      'CLB\\Controller\\CoverController' => 'VuFind\\Controller\\CoverControllerFactory',
    ),     
    'aliases' => 
    array (
      'VuFind\\Controller\\CoverController' => 'CLB\\Controller\\CoverController',
    ),
  ),
);
