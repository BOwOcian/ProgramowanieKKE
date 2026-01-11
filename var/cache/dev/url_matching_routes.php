<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/xdebug' => [[['_route' => '_profiler_xdebug', '_controller' => 'web_profiler.controller.profiler::xdebugAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/api/post/new' => [[['_route' => 'app_api_api_post', '_controller' => 'App\\Controller\\Api\\ApiController::post'], null, ['POST' => 0], null, false, false, null]],
        '/api/register' => [[['_route' => 'app_api_api_register', '_controller' => 'App\\Controller\\Api\\ApiController::register'], null, ['POST' => 0], null, false, false, null]],
        '/dashboard' => [[['_route' => 'app_dashboard', '_controller' => 'App\\Controller\\DashboardController::index'], null, null, null, false, false, null]],
        '/dashboard/profile' => [[['_route' => 'app_profile', '_controller' => 'App\\Controller\\DashboardController::profile'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\LoginController::index'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\LoginController::logout'], null, ['GET' => 0], null, false, false, null]],
        '/test' => [[['_route' => 'app_post_test', '_controller' => 'App\\Controller\\PostController::test'], null, ['GET' => 0], null, false, false, null]],
        '/register' => [[['_route' => 'app_register', '_controller' => 'App\\Controller\\RegistrationController::register'], null, null, null, false, false, null]],
        '/api/login_check' => [[['_route' => 'api_login_check'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/([^/]++)/_components/([^/]++)(?:/([^/]++))?(*:86)'
                .'|/_(?'
                    .'|wdt/([^/]++)(*:110)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:156)'
                            .'|router(*:170)'
                            .'|exception(?'
                                .'|(*:190)'
                                .'|\\.css(*:203)'
                            .')'
                        .')'
                        .'|(*:213)'
                    .')'
                .')'
                .'|/(en|pl)?(*:232)'
                .'|/(en|pl)/(?'
                    .'|post(?'
                        .'|/(?'
                            .'|new(*:266)'
                            .'|([^/]++)(?'
                                .'|(*:285)'
                                .'|/(?'
                                    .'|edit(*:301)'
                                    .'|delete(*:315)'
                                .')'
                            .')'
                        .')'
                        .'|s/user/([^/]++)(*:341)'
                    .')'
                    .'|toggleFollow/([^/]++)(*:371)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        86 => [[['_route' => 'ux_live_component', '_live_action' => 'get'], ['_locale', '_live_component', '_live_action'], null, null, false, true, null]],
        110 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        156 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        170 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        190 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        203 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        213 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        232 => [[['_route' => 'posts.index', '_locale' => 'en', '_controller' => 'App\\Controller\\PostController::index'], ['_locale'], ['GET' => 0], null, false, true, null]],
        266 => [[['_route' => 'posts.new', '_controller' => 'App\\Controller\\PostController::new'], ['_locale'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        285 => [[['_route' => 'posts.show', '_controller' => 'App\\Controller\\PostController::show'], ['_locale', 'id'], ['GET' => 0], null, false, true, null]],
        301 => [[['_route' => 'posts.edit', '_controller' => 'App\\Controller\\PostController::edit'], ['_locale', 'id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        315 => [[['_route' => 'posts.delete', '_controller' => 'App\\Controller\\PostController::delete'], ['_locale', 'id'], ['POST' => 0], null, false, false, null]],
        341 => [[['_route' => 'posts.user', '_controller' => 'App\\Controller\\PostController::user'], ['_locale', 'id'], ['GET' => 0], null, false, true, null]],
        371 => [
            [['_route' => 'toggleFollow', '_controller' => 'App\\Controller\\PostController::toggleFollow'], ['_locale', 'user'], ['GET' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
