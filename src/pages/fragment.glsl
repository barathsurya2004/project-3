uniform float time;
uniform vec2 resolution;

vec3 colorA = vec3(0.0, 0.0, 0.0);
vec3 colorB = vec3(1.0, 1.0, 1.0);

void main() {
  vec3 color = vec3(0.0);
  float pct = abs(sin(time));
  color = mix(colorA, colorB, pct);
  gl_FragColor = vec4(color,1.0);
}