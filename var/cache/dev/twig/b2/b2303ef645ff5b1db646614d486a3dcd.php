<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* dashboard/_update_profile_image_form.html.twig */
class __TwigTemplate_201e8b8a4b44316d745ebe54ce34ed39 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_5a27a8ba21ca79b61932376b2fa922d2 = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->enter($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/_update_profile_image_form.html.twig"));

        $__internal_6f47bbe9983af81f1e7450e9a3e3768f = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->enter($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "dashboard/_update_profile_image_form.html.twig"));

        // line 1
        echo "<section>
  <header>
    <h2 class=\"text-lg font-medium text-gray-900\">Zdjęcie profilowe</h2>

    <p class=\"mt-1 text-sm text-gray-600\">Tutaj możesz zmienić swoje zdjęcie profilowe</p>
  </header>

  <img src=\"";
        // line 8
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\AssetExtension']->getAssetUrl(("images/" . (((twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 8), "image", [], "any", false, true, false, 8), "path", [], "any", true, true, false, 8) &&  !(null === twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 8), "image", [], "any", false, true, false, 8), "path", [], "any", false, false, false, 8)))) ? (twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, ($context["app"] ?? null), "user", [], "any", false, true, false, 8), "image", [], "any", false, true, false, 8), "path", [], "any", false, false, false, 8)) : ("")))), "html", null, true);
        echo "\" alt=\"profile image\" />

  ";
        // line 10
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["imageForm"]) || array_key_exists("imageForm", $context) ? $context["imageForm"] : (function () { throw new RuntimeError('Variable "imageForm" does not exist.', 10, $this->source); })()), 'form_start', ["attr" => ["class" => "p-4"]]);
        // line 11
        echo "
    <label class=\"block mb-4\">
      <span class=\"sr-only\">Choose File</span>
      ";
        // line 14
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["imageForm"]) || array_key_exists("imageForm", $context) ? $context["imageForm"] : (function () { throw new RuntimeError('Variable "imageForm" does not exist.', 14, $this->source); })()), "imageFile", [], "any", false, false, false, 14), 'widget', ["attr" => ["class" => "block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"]]);
        echo "
     ";
        // line 15
        if ((twig_length_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["imageForm"]) || array_key_exists("imageForm", $context) ? $context["imageForm"] : (function () { throw new RuntimeError('Variable "imageForm" does not exist.', 15, $this->source); })()), "imageFile", [], "any", false, false, false, 15), "vars", [], "any", false, false, false, 15), "errors", [], "array", false, false, false, 15)) > 0)) {
            // line 16
            echo "\t\t\t<span class=\"text-red-600 text-sm\">
\t\t\t\t";
            // line 17
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["imageForm"]) || array_key_exists("imageForm", $context) ? $context["imageForm"] : (function () { throw new RuntimeError('Variable "imageForm" does not exist.', 17, $this->source); })()), "imageFile", [], "any", false, false, false, 17), "vars", [], "any", false, false, false, 17), "errors", [], "array", false, false, false, 17));
            foreach ($context['_seq'] as $context["_key"] => $context["error"]) {
                // line 18
                echo "\t\t\t\t\t<span>";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["error"], "message", [], "any", false, false, false, 18), "html", null, true);
                echo "</span>
\t\t\t\t";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['error'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 20
            echo "\t\t\t</span>
\t\t";
        }
        // line 22
        echo "    </label>
    <div class=\"flex items-center gap-4\">
        <button type=\"submit\" class=\"px-4 py-2 text-sm text-white   bg-indigo-600 rounded\">Zapisz</button>
        ";
        // line 25
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 25, $this->source); })()), "flashes", [0 => "status-image"], "method", false, false, false, 25));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 26
            echo "        ";
            if (($context["message"] == "image-updated")) {
                // line 27
                echo "        <p x-data=\"{ show: true }\" x-show=\"show\" x-transition   x-init=\"setTimeout(() => show = false, 2000)\" class=\"text-sm  text-gray-600\">Saved</p>
        ";
            }
            // line 29
            echo "        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 30
        echo "    </div>
  ";
        // line 31
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["imageForm"]) || array_key_exists("imageForm", $context) ? $context["imageForm"] : (function () { throw new RuntimeError('Variable "imageForm" does not exist.', 31, $this->source); })()), 'form_end');
        echo "
</section>";
        
        $__internal_5a27a8ba21ca79b61932376b2fa922d2->leave($__internal_5a27a8ba21ca79b61932376b2fa922d2_prof);

        
        $__internal_6f47bbe9983af81f1e7450e9a3e3768f->leave($__internal_6f47bbe9983af81f1e7450e9a3e3768f_prof);

    }

    public function getTemplateName()
    {
        return "dashboard/_update_profile_image_form.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  115 => 31,  112 => 30,  106 => 29,  102 => 27,  99 => 26,  95 => 25,  90 => 22,  86 => 20,  77 => 18,  73 => 17,  70 => 16,  68 => 15,  64 => 14,  59 => 11,  57 => 10,  52 => 8,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<section>
  <header>
    <h2 class=\"text-lg font-medium text-gray-900\">Zdjęcie profilowe</h2>

    <p class=\"mt-1 text-sm text-gray-600\">Tutaj możesz zmienić swoje zdjęcie profilowe</p>
  </header>

  <img src=\"{{asset('images/' ~ app.user.image.path ?? '')}}\" alt=\"profile image\" />

  {{ form_start(imageForm, {'attr': {'class': 'p-4' }}
\t) }}
    <label class=\"block mb-4\">
      <span class=\"sr-only\">Choose File</span>
      {{form_widget(imageForm.imageFile, {'attr': {'class': 'block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'}})}}
     {% if imageForm.imageFile.vars['errors']|length > 0 %}
\t\t\t<span class=\"text-red-600 text-sm\">
\t\t\t\t{% for error in imageForm.imageFile.vars['errors'] %}
\t\t\t\t\t<span>{{ error.message }}</span>
\t\t\t\t{% endfor %}
\t\t\t</span>
\t\t{% endif %}
    </label>
    <div class=\"flex items-center gap-4\">
        <button type=\"submit\" class=\"px-4 py-2 text-sm text-white   bg-indigo-600 rounded\">Zapisz</button>
        {% for message in app.flashes('status-image') %}
        {% if message == 'image-updated' %}
        <p x-data=\"{ show: true }\" x-show=\"show\" x-transition   x-init=\"setTimeout(() => show = false, 2000)\" class=\"text-sm  text-gray-600\">Saved</p>
        {% endif %}
        {% endfor %}
    </div>
  {{ form_end(imageForm) }}
</section>", "dashboard/_update_profile_image_form.html.twig", "C:\\Users\\User\\Desktop\\Symfony-course-app\\templates\\dashboard\\_update_profile_image_form.html.twig");
    }
}
