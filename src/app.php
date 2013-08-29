<?php

require_once __DIR__.'/../vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Silex\Provider\TwigServiceProvider;
use Silex\Provider\UrlGeneratorServiceProvider;
use Silex\Provider\FormServiceProvider;

$app = new Silex\Application();

$app['debug'] = true;

// Register Silex services
$app->register(new TwigServiceProvider(), array(
    'twig.path' => __DIR__.'/views',
));
$app->register(new UrlGeneratorServiceProvider());
$app->register(new FormServiceProvider());

// Set up routes
$app->get('/', function () use ($app) {
    return $app['twig']->render('index.twig', array());
})
->bind('home');

return $app;